import { YesOrNo } from '../../app/case/case';
import { TranslationFn } from '../../app/controller/GetController';
import { FormContent } from '../../app/form/Form';
import { isFieldFilledIn } from '../../app/form/validation';
import { generateCommonContent } from '../common/common.content';

export const generateContent: TranslationFn = ({ isDivorce }) => {
  const commonContentEn = generateCommonContent('en', isDivorce).commonTranslations;
  const en = {
    title: `Is your original ${
      isDivorce ? commonContentEn.marriage : commonContentEn.civilPartnership
    } certificate in English?`,
    line1: 'If your original certificate contains an English version, select ‘yes’.',
    line2: 'If you have an English translation as a separate document, select ‘no’.',
    errors: {
      certificateInEnglish: {
        required: commonContentEn.required,
      },
    },
  };

  const commonContentCy = generateCommonContent('cy', isDivorce).commonTranslations;
  const cy: typeof en = {
    title: `A yw eich tystysgrif ${
      isDivorce ? commonContentCy.marriage : commonContentCy.civilPartnership
    } wreiddiol yn Saesneg?`,
    line1: "Os yw eich tystysgrif wreiddiol yn cynnwys fersiwn Saesneg, dewiswch 'ydy'.",
    line2: "Os oes gennych gyfieithiad Saesneg fel dogfen ar wahân, dewiswch 'nac ydy'.",
    errors: {
      certificateInEnglish: {
        required: commonContentCy.required,
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
    certificateInEnglish: {
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
