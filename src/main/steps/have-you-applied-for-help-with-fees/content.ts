import { YesOrNo } from '../../app/case/definition';
import { TranslationFn } from '../../app/controller/GetController';
import { FormContent } from '../../app/form/Form';
import { isFieldFilledIn, isInvalidHelpWithFeesRef } from '../../app/form/validation';

const en = ({ isDivorce, required }) => ({
  title: `Have you already applied for help with your ${isDivorce ? 'divorce' : ''} fee?`,
  enterRefNo: 'Enter your Help With Fees reference number:',
  refReceivedWhenApplied: 'You received this when you applied for help with your fees.',
  refExample: 'For example, HWF-A1B-23C',
  errors: {
    alreadyAppliedForHelpPaying: {
      required,
    },
    helpWithFeesRefNo: {
      required:
        'You need to enter your Help With Fees reference number before continuing. You received this when you applied.',
      invalid: 'You have entered an invalid Help With Fees reference number. Check the number and enter it again.',
      invalidUsedExample:
        'You have entered the example Help With Fees number. Enter the number you were sent before continuing.',
    },
  },
});

const cy: typeof en = ({ isDivorce, required }) => ({
  title: `Ydych chi eisoes wedi gwneud cais am help i dalu ${isDivorce ? 'ffi eich ysgariad' : 'eich ffi'}?`,
  enterRefNo: 'Nodwch eich cyfeirnod Help i Dalu Ffioedd:',
  refReceivedWhenApplied: 'Fe gawsoch hwn pan wnaethoch gais am help i dalu ffioedd.',
  refExample: 'Er enghraifft, HWF-A1B-23C',
  errors: {
    alreadyAppliedForHelpPaying: { required },
    helpWithFeesRefNo: {
      required:
        'Mae angen i chi nodi eich cyfeirnod Help i Dalu Ffioedd cyn parhau. Fe gawsoch hwn pan wnaethoch y cais.',
      invalid: 'Rydych wedi nodi cyfeirnod Help i Dalu Ffioedd annilys. Gwiriwch y rhif a nodwch ef eto.',
      invalidUsedExample:
        'Rydych wedi nodi’r rhif Help i Dalu Ffioedd sy’n cael ei ddefnyddio fel enghraifft. ' +
        'Nodwch y rhif a anfonwyd atoch cyn parhau.',
    },
  },
});

export const form: FormContent = {
  fields: {
    alreadyAppliedForHelpPaying: {
      type: 'radios',
      classes: 'govuk-radios',
      label: l => l.title,
      labelHidden: true,
      values: [
        {
          label: l => l.yes,
          value: YesOrNo.YES,
          subFields: {
            helpWithFeesRefNo: {
              type: 'text',
              attributes: {
                maxLength: 11,
              },
              classes: 'govuk-!-width-one-third',
              label: l => l.enterRefNo,
              hint: l => `
                <p class="govuk-label">${l.refReceivedWhenApplied}</p>
                ${l.refExample}`,
              validator: isInvalidHelpWithFeesRef,
            },
          },
        },
        { label: l => l.no, value: YesOrNo.NO },
      ],
      validator: isFieldFilledIn,
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
