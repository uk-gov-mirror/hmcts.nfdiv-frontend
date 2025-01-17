import { YesOrNo } from '../../app/case/definition';
import { TranslationFn } from '../../app/controller/GetController';
import { FormContent } from '../../app/form/Form';
import { isFieldFilledIn } from '../../app/form/validation';
import { CommonContent } from '../common/common.content';

const en = ({ partner, required }: CommonContent) => ({
  title: `Do you need your contact details kept private from your ${partner}?`,
  line1: `The court can keep your address, email address and phone number private from your ${partner}.`,
  detailsPrivate: 'Keep my contact details private',
  detailsNotPrivate: 'I do not need my contact details kept private',
  errors: {
    addressPrivate: { required },
  },
});

// @TODO translations
const cy = en;

export const form: FormContent = {
  fields: {
    addressPrivate: {
      type: 'radios',
      classes: 'govuk-radios',
      label: l => l.title,
      labelHidden: true,
      values: [
        { label: l => l.detailsPrivate, value: YesOrNo.YES },
        { label: l => l.detailsNotPrivate, value: YesOrNo.NO },
      ],
      validator: value => isFieldFilledIn(value),
    },
  },
  submit: {
    text: l => l.continue,
  },
};

const languages = {
  en,
  cy,
};

export const generateContent: TranslationFn = (content: CommonContent) => {
  const translations = languages[content.language](content);
  return {
    ...translations,
    form,
  };
};
