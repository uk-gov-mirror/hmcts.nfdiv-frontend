import { YesOrNo } from '../../app/case/case';
import { TranslationFn } from '../../app/controller/GetController';
import { FormContent } from '../../app/form/Form';
import { isFieldFilledIn } from '../../app/form/validation';
import { commonContent } from '../common/common.content';

export const generateContent: TranslationFn = ({ isDivorce }) => {
  const en = {
    title: `Did you ${isDivorce ? 'get married' : 'form your civil partnership'} in the UK?`,
    line1: 'The UK is made up of England, Scotland, Wales and Northern Ireland.',
    errors: {
      inTheUk: {
        required: commonContent.en.required,
      },
    },
  };

  const cy: typeof en = {
    title: `A wnaethoch chi ${isDivorce ? 'briodi' : 'ffurfio eich partneriaeth sifil'} yn y DU?`,
    line1: "Mae'r DU yn cynnwys Cymru, Lloegr, Yr Alban a Gogledd Iwerddon.",
    errors: {
      inTheUk: {
        required: commonContent.cy.required,
      },
    },
  };

  const common = {
    form,
  };

  return { en, cy, common };
};

export const form: FormContent = {
  fields: {
    inTheUk: {
      type: 'radios',
      classes: 'govuk-radios--inline',
      label: l => l.title,
      values: [
        { label: l => l.yes, value: YesOrNo.Yes },
        { label: l => l.no, value: YesOrNo.No },
      ],
      validator: value => isFieldFilledIn(value),
    },
  },
  submit: {
    text: l => l.continue,
  },
};