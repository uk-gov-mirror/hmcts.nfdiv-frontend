import { invert } from 'lodash';

import { Case, Checkbox, LanguagePreference, formFieldsToCaseMapping, formatCase } from './case';
import { CaseData, ConfidentialAddress, YesOrNo } from './definition';
import { fromApi as formatAddress } from './formatter/address';

type FromApiConverters = Partial<Record<keyof CaseData, string | ((data: Partial<CaseData>) => Partial<Case>)>>;

const checkboxConverter = (value: string | undefined) => {
  if (!value) {
    return undefined;
  }

  return value === YesOrNo.YES ? Checkbox.Checked : Checkbox.Unchecked;
};

const fields: FromApiConverters = {
  ...invert(formFieldsToCaseMapping),
  marriageIsSameSexCouple: data => ({
    sameSex: checkboxConverter(data.marriageIsSameSexCouple),
  }),
  marriageDate: data => ({
    relationshipDate: fromApiDate(data.marriageDate),
  }),
  languagePreferenceWelsh: data => ({
    englishOrWelsh:
      data.languagePreferenceWelsh === YesOrNo.YES ? LanguagePreference.Welsh : LanguagePreference.English,
  }),
  derivedPetitionerHomeAddress: data => formatAddress(data, 'your'),
  petitionerAgreedToReceiveEmails: data => ({
    agreeToReceiveEmails: checkboxConverter(data.petitionerAgreedToReceiveEmails),
  }),
  petitionerKnowsRespondentsEmailAddress: data => ({
    doNotKnowRespondentEmailAddress:
      data.petitionerKnowsRespondentsEmailAddress === YesOrNo.YES ? Checkbox.Unchecked : Checkbox.Checked,
  }),
  petitionerContactDetailsConfidential: data => ({
    addressPrivate: data.petitionerContactDetailsConfidential === ConfidentialAddress.KEEP ? YesOrNo.YES : YesOrNo.NO,
  }),
  petitionerWantsToHavePapersServedAnotherWay: data => ({
    iWantToHavePapersServedAnotherWay: checkboxConverter(data.petitionerWantsToHavePapersServedAnotherWay),
  }),
  derivedRespondentHomeAddress: data => formatAddress(data, 'their'),
};

const fromApiDate = date => {
  if (!date) {
    return;
  }

  const [y, m, d] = date.split('-');
  return { year: `${+y}`, month: `${+m}`, day: `${+d}` };
};

export const fromApiFormat = (data: CaseData): Case => formatCase(fields, data);
