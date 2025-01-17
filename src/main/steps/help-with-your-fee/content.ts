import { YesOrNo } from '../../app/case/definition';
import { TranslationFn } from '../../app/controller/GetController';
import { FormContent } from '../../app/form/Form';
import { isFieldFilledIn } from '../../app/form/validation';

const en = ({ isDivorce, required }) => ({
  title: `Do you need help paying the fee for ${isDivorce ? 'your divorce' : 'ending your civil partnership'}?`,
  line1: `This ${
    isDivorce ? 'divorce application' : 'application'
  } costs £550. You may be able to get help paying the fee if you:`,
  helpPayingWhen: ['are on certain benefits <em>or</em>', 'have a little or no savings <em>or</em>', 'have low income'],
  yes: 'I need help paying the fee',
  no: 'I do not need help paying the fee',
  errors: {
    helpPayingNeeded: {
      required,
    },
  },
});

const cy: typeof en = ({ isDivorce, required }) => ({
  title: `A oes angen help arnoch i dalu'r ffi am ${
    isDivorce ? 'eich ysgariad?' : "ddod â'ch partneriaeth sifil i ben?"
  }`,
  line1: `Mae'r ${
    isDivorce ? 'cais am ysgariad' : 'cais'
  } hwn yn costio £550. Efallai y byddwch yn gallu cael help i dalu'r ffi:`,
  helpPayingWhen: [
    'os ydych yn cael budd-daliadau penodol, <em>neu</em>',
    'os oes gennych ychydig o gynilion neu ddim cynilion o gwbl, <em>neu</em>',
    'os ydych ar incwm isel',
  ],
  yes: "Mae angen help arnaf i dalu'r ffi",
  no: "Nid oes angen help arnaf i dalu'r ffi",
  errors: {
    helpPayingNeeded: {
      required,
    },
  },
});

export const form: FormContent = {
  fields: {
    helpPayingNeeded: {
      type: 'radios',
      classes: 'govuk-radios',
      label: l => l.title,
      labelHidden: true,
      values: [
        { label: l => l.yes, value: YesOrNo.YES },
        { label: l => l.no, value: YesOrNo.NO },
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

export const generateContent: TranslationFn = content => {
  const translations = languages[content.language](content);
  return {
    ...translations,
    form,
  };
};
