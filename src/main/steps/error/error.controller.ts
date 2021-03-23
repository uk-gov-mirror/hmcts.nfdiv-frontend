import autobind from 'autobind-decorator';
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AppRequest } from '../../app/controller/AppRequest';
import { Language, generatePageContent } from '../common/common.content';

import { errorContent } from './content';

@autobind
export class ErrorController {
  /**
   * Catch all for 404
   */
  public notFound(req: AppRequest, res: Response): void {
    req.locals.logger.info(`404 Not Found: ${req.originalUrl}`);

    this.render(req, res, StatusCodes.NOT_FOUND);
  }

  /**
   * Catch all for 500 errors
   */
  public internalServerError(error: Errors, req: AppRequest, res: Response): void {
    const { message = error, stack = undefined } = typeof error === 'object' ? error : {};

    let response: AxiosResponse<string | Record<string, unknown>> | undefined;
    if (typeof error === 'object' && (error as AxiosError).isAxiosError) {
      response = (error as AxiosError).response?.data;
    }

    req.locals.logger.error(`${stack || message}`, response);

    const statusCode = (error as HTTPError)?.status;
    this.render(req, res, statusCode);
  }

  /**
   * Catch all for CSRF Token errors
   */
  public CSRFTokenError(req: AppRequest, res: Response): void {
    req.locals.logger.error('CSRF Token Failed');

    this.render(req, res, StatusCodes.BAD_REQUEST);
  }

  private render(req: AppRequest, res: Response, statusCode: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR) {
    if (res.headersSent) {
      // If there's an async error, we may have already rendered an error page upstream,
      // so we don't want to call render again
      return;
    }

    const lang = (req.session?.lang || 'en') as Language;
    const errorText = errorContent[lang][statusCode] || errorContent[lang][StatusCodes.INTERNAL_SERVER_ERROR];
    const commonContent = generatePageContent(lang);
    res.locals.isError = true;
    res.status(statusCode);
    res.render('error/error', { ...commonContent, ...errorText });
  }
}

export class HTTPError extends Error {
  constructor(public message: string, public status = StatusCodes.INTERNAL_SERVER_ERROR) {
    super(message);
    this.name = 'HTTPError';
    this.status = status;
  }
}

export type Errors = Error | HTTPError | AxiosError | string | undefined;
