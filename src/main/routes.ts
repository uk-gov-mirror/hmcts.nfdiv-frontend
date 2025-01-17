import fs from 'fs';

import { Application, RequestHandler, Response } from 'express';

import { AppRequest } from './app/controller/AppRequest';
import { GetController } from './app/controller/GetController';
import { PostController } from './app/controller/PostController';
import { Form } from './app/form/Form';
import { stepsWithContent } from './steps';
import { AccessibilityStatementGetController } from './steps/accessibility-statement/get';
import { CookiesGetController } from './steps/cookies/get';
import { ErrorController } from './steps/error/error.controller';
import { HomeGetController } from './steps/home/get';
import { PostcodeLookupPostController } from './steps/postcode-lookup/post';
import { PrivacyPolicyGetController } from './steps/privacy-policy/get';
import { SaveSignOutGetController } from './steps/save-sign-out/get';
import { TermsAndConditionsGetController } from './steps/terms-and-conditions/get';
import { TimedOutGetController } from './steps/timed-out/get';
import {
  ACCESSIBILITY_STATEMENT_URL,
  COOKIES_URL,
  CSRF_TOKEN_ERROR_URL,
  HOME_URL,
  POSTCODE_LOOKUP,
  PRIVACY_POLICY_URL,
  SAVE_AND_SIGN_OUT,
  SIGN_OUT_URL,
  TERMS_AND_CONDITIONS_URL,
  TIMED_OUT_URL,
} from './steps/urls';

export class Routes {
  public enableFor(app: Application): void {
    const { errorHandler } = app.locals;
    const errorController = new ErrorController();

    app.get(CSRF_TOKEN_ERROR_URL, errorHandler(errorController.CSRFTokenError));
    app.get(HOME_URL, errorHandler(new HomeGetController().get));
    app.get(SAVE_AND_SIGN_OUT, errorHandler(new SaveSignOutGetController().get));
    app.get(TIMED_OUT_URL, errorHandler(new TimedOutGetController().get));
    app.get(PRIVACY_POLICY_URL, errorHandler(new PrivacyPolicyGetController().get));
    app.get(TERMS_AND_CONDITIONS_URL, errorHandler(new TermsAndConditionsGetController().get));
    app.get(COOKIES_URL, errorHandler(new CookiesGetController().get));
    app.get(ACCESSIBILITY_STATEMENT_URL, errorHandler(new AccessibilityStatementGetController().get));
    app.post(POSTCODE_LOOKUP, errorHandler(new PostcodeLookupPostController().post));

    for (const step of stepsWithContent) {
      const dir = `${__dirname}/steps${step.url}`;
      const customView = `${dir}/template.njk`;
      const view = fs.existsSync(customView) ? customView : `${dir}/../common/template.njk`;
      const getController = fs.existsSync(`${dir}/get.ts`) ? require(`${dir}/get.ts`).default : GetController;

      app.get(step.url, errorHandler(new getController(view, step.generateContent).get));

      if (step.form) {
        const postController = fs.existsSync(`${dir}/post.ts`) ? require(`${dir}/post.ts`).default : PostController;
        app.post(step.url, errorHandler(new postController(new Form(step.form)).post));
      }
    }

    app.get(
      '/active',
      errorHandler((req: AppRequest, res: Response) => {
        if (!req.session.user) {
          return res.redirect(SIGN_OUT_URL);
        }
        return res.end();
      })
    );

    app.use((errorController.notFound as unknown) as RequestHandler);
  }
}
