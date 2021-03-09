import { generateCommonContent } from '../../../main/steps/common/common.content';

export const defaultViewArgs = {
  ...generateCommonContent('en').commonTranslations,
  sessionErrors: expect.any(Array),
  getNextIncompleteStepUrl: expect.any(Function),
  isDivorce: expect.any(Boolean),
  partner: expect.any(String),
  language: expect.any(String),
};
