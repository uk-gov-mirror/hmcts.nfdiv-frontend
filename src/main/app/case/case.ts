import { AnyObject } from '../controller/PostController';

export const formFieldsToCaseMapping = {
  divorceOrDissolution: 'divorceOrDissolution',
  partnerGender: 'D8InferredRespondentGender',
  screenHasUnionBroken: 'D8ScreenHasMarriageBroken',
  hasCertificate: 'D8ScreenHasMarriageCert',
  helpPayingNeeded: 'D8HelpWithFeesNeedHelp',
  alreadyAppliedForHelpPaying: 'D8HelpWithFeesAppliedForFees',
};

export function formatCase<InputFormat, OutputFormat>(fields: FieldFormats, data: InputFormat): OutputFormat {
  const result = {};

  for (const field of Object.keys(data)) {
    const value = fields[field];

    if (typeof value === 'function') {
      Object.assign(result, value(data));
    } else if (typeof fields[field] === 'string') {
      result[value] = data[field];
    }
  }

  return result as OutputFormat;
}

export type FieldFormats = Record<string, string | ((AnyObject) => AnyObject)>;

export interface Case {
  divorceOrDissolution: CaseType;
  partnerGender?: Gender;
  sameSex?: YesOrNo;
  screenHasUnionBroken?: YesOrNo;
  relationshipDate?: CaseDate;
  hasCertificate?: YesOrNo;
  helpPayingNeeded?: YesOrNo;
  alreadyAppliedForHelpPaying?: YesOrNo;
  helpWithFeesRefNo?: string;
}

export interface CaseWithId extends Case {
  id: string;
}

// TODO switch to use the type field and be Marriage or Civil Partnership (CCD Definitions)
export enum CaseType {
  Divorce = 'divorce',
  Dissolution = 'dissolution',
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export enum YesOrNo {
  Yes = 'YES',
  No = 'NO',
}

export interface CaseDate {
  year: string;
  month: string;
  day: string;
}
