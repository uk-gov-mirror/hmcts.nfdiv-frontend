import autobind from 'autobind-decorator';
import { Response } from 'express';
import Negotiator from 'negotiator';

import { LanguageToggle } from '../../modules/i18n';
import { getNextIncompleteStepUrl } from '../../steps';
import { CommonContent, Language, generatePageContent } from '../../steps/common/common.content';
import { DivorceOrDissolution } from '../case/definition';

import { AppRequest } from './AppRequest';

export type PageContent = Record<string, unknown>;
export type TranslationFn = (content: CommonContent) => PageContent;

@autobind
export class GetController {
  constructor(protected readonly view: string, protected readonly content: TranslationFn) {}

  public async get(req: AppRequest, res: Response): Promise<void> {
    if (res.locals.isError || res.headersSent) {
      // If there's an async error, it wil have already rendered an error page upstream,
      // so we don't want to call render again
      return;
    }

    const language = this.getPreferredLanguage(req) as Language;
    const isDivorce = res.locals.serviceType === DivorceOrDissolution.DIVORCE;
    const formState = req.session?.userCase;
    const content = generatePageContent({
      language,
      pageContent: this.content,
      isDivorce,
      formState,
      userEmail: req.session?.user.email,
    });

    const sessionErrors = req.session?.errors || [];

    if (req.session?.errors) {
      req.session.errors = undefined;
    }

    res.render(this.view, {
      ...content,
      sessionErrors,
      htmlLang: language,
      getNextIncompleteStepUrl: () => getNextIncompleteStepUrl(req),
    });
  }

  private getPreferredLanguage(req: AppRequest) {
    // User selected language
    const requestedLanguage = req.query['lng'] as string;
    if (LanguageToggle.supportedLanguages.includes(requestedLanguage)) {
      return requestedLanguage;
    }

    // Saved session language
    if (req.session?.lang) {
      return req.session.lang;
    }

    // Browsers default language
    const negotiator = new Negotiator(req);
    return negotiator.language(LanguageToggle.supportedLanguages) || 'en';
  }
}
