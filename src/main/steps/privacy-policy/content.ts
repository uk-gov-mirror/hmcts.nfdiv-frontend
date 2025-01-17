import { TranslationFn } from '../../app/controller/GetController';

const en = ({ isDivorce }) => ({
  title: 'Privacy policy',
  info:
    'This privacy policy explains why we collect your personal data and what we do with it. It also explains your rights and how to enforce them.',
  whoManages: 'Who manages this service',
  managedBy:
    'This service is managed by HM Courts and Tribunals Service (HMCTS), which is an executive agency of the Ministry of Justice (MoJ).',
  moj:
    "The MoJ is known as the data controller for data protection purposes. <a class='govuk-link' href='https://www.gov.uk/government/organisations/ministry-of-justice/about/personal-information-charter'>The MoJ personal information charter</a> explains how the MoJ processes personal data.",
  responsibleForDeciding:
    'As part of the MoJ, HMCTS is responsible for deciding how your personal data is used and for protecting the personal data you provide.',
  moreInformation:
    "More information about using this service is in the <a class='govuk-link' href='/terms-and-conditions'>terms and conditions</a>.",
  thePersonal: 'The personal data we need',
  whenYouUseDivorceService: 'We need the following personal data for this service:',
  applicantName: 'the applicant’s name',
  respondentName: `the name of the person the applicant is ${
    isDivorce ? 'divorcing' : 'ending their civil partnership with'
  }`,
  changedApplicantName: `proof of the applicant’s name change if they’ve changed it since they ${
    isDivorce ? 'got married' : 'formed their civil partnership'
  }`,
  changedRespondentName: `proof of the name change of the person the applicant is ${
    isDivorce ? 'divorcing' : 'ending their civil partnership with'
  } (if they changed it)`,
  marriageCert: `a copy of the ${
    isDivorce ? 'marriage certificate' : 'civil partnership certificate'
  } and the details from it`,
  countryApplicantMarried: 'the country in which the applicant is habitually resident',
  countryRespondentMarried: `the country in which the person the applicant is ${
    isDivorce ? 'divorcing' : 'ending their civil partnership with'
  } is habitually resident`,
  applicantHabitualResidence: 'whether the applicant is habitually resident in England or Wales',
  respondentHabitualResidence: `whether the person the applicant is ${
    isDivorce ? 'divorcing' : 'ending their civil partnership with'
  } is habitually resident in England or Wales`,
  applicantDomicile: 'whether the applicant is domiciled in England or Wales',
  respondentDomicile: `whether the person the applicant is ${
    isDivorce ? 'divorcing' : 'ending their civil partnership with'
  } is domiciled in England or Wales`,
  applicantEmailAndPhone: 'the applicant’s addresses, email addresses and phone numbers',
  respondentEmailAndPhone: `the address, email address and phone number of the person the applicant is ${
    isDivorce ? 'divorcing' : 'ending their civil partnership with'
  }`,
  applicantAddressAndNames:
    'the address, email address and phone number of the applicant’s solicitors (if they have one)',
  respondentAddressAndNames: `the address, email address and phone number of the solicitor of the person the applicant is ${
    isDivorce ? 'divorcing' : 'ending their civil partnership with'
  } (if they have one)`,
  applicantOtherCourtCases: 'details of other court cases the applicant has been involved in',
  respondentOtherCourtCases: `details of any other court cases the person the applicant is ${
    isDivorce ? 'divorcing' : 'ending their civil partnership with'
  } has been involved in (if there are any)`,
  receivingNotifications: 'Receiving notifications',
  youNeedSignUp: `You need to sign up to receive notifications to use the ${
    isDivorce ? 'divorce' : 'end a civil partnership'
  } service. This is a legal requirement so that the application can proceed.`,
  storingYourData: 'Storing your data',
  askedForEmailAddress:
    'When you use this service you’ll be asked to use your email address to set up an account. You will be able to use this email and password to sign into other HMCTS services.',
  holdYourData: `While you’re filling out or responding to a ${
    isDivorce ? 'divorce' : 'ending a civil partnership'
  } application we will hold your data for up to 6 months. If you do not complete the application during this time you’ll have to start again.`,
  whenADivorceIsFinalised: `When ${
    isDivorce ? 'your divorce' : 'ending a civil partnership'
  } is finalised the case is stored for 18 years. After this time, some data (from the conditional order and the final order) is deleted.`,
  theRemainder:
    'The remainder of the case information is stored for an additional 82 years. After a total of 100 years this data will be deleted.',

  whyWeCollect: 'Why we collect your personal data',
  personalData: 'We collect your personal data to:',
  processApplication: 'process your application',
  legalRequirements: 'meet legal requirements',
  improveService: 'make improvements to this service',
  staffUse:
    'Our staff use your personal data to process your application. They work in the UK and your data is stored in the UK.',
  usingYourData: 'Using your data',
  asPart:
    'As part of your application you’ll be asked to use your email address to set up an account. You will be able to use this email and password to sign into other HMCTS services.',
  weMayAskForPermission:
    'We will ask for your permission to use your email address to send you emails using GOV.UK Notify. This system processes emails only within the European Economic Area until the point where emails are handed over to the email provider you use.',
  weUseCookies:
    "We use <a class='govuk-link' href='/cookies'>cookies</a> to collect data that tells us about how you’re using this service, including:",
  ifYouOpenEmail: 'if you open an email from us or click on a link in an email',
  yourComputer: 'your computer, phone or tablet’s IP address',
  theRegion: 'the region or town where you’re using your computer, phone or tablet',
  theWeb: 'the web browser you use',
  sharingYourData: 'Sharing your data',
  ifAnother:
    'While processing your claim or application, another government department, agency or organisation might be involved and we may share your data with them.',
  dataSharedWithPrintingServiceProvider: `Any data you provide which needs to be printed will be shared with Xerox (UK) Ltd. For example, the ${
    isDivorce ? 'divorce' : 'ending a civil partnership'
  } application will be printed so that it can be sent to the respondent by post.`,
  ifYouContactUs:
    'If you contact us and ask for help with the service you’re using, your personal data may be shared with the Good Things Foundation. This is a company who we have partnered with to offer face to face support.',
  crime:
    'In some circumstances we may share your data for example, to prevent or detect crime, or to produce anonymised statistics.',
  weUse:
    "We use Google Analytics to collect data about how a website is used. This anonymous data is shared with Google. Find out about this in our <a class='govuk-link' href='/terms-and-conditions'>terms and conditions</a>.",
  storeAndShare: 'Storing and sharing your data internationally',
  personalInformation:
    'Sometimes we need to send your personal information outside of the UK. When we do this we comply with data protection law.',
  yourRights: 'Your rights',
  youCanAsk: 'You can ask:',
  toSeePersonal: 'to see the personal data that we hold on you',
  toHavePersonal: 'to have the personal data corrected',
  toHaveDataRemoved:
    'to have the personal data removed or deleted (this will depend on the circumstances, for example if you decide not to continue your application)',
  thatAccessIsRestricted:
    'that access to the personal data is restricted (for example, you can ask to have your data stored for longer and not automatically deleted)',
  ifYouWantToSeePersonal: 'If you want to see the personal data that we hold on you, you can:',
  completeForm:
    "complete a form to make a <a class='govuk-link' href='https://www.gov.uk/government/publications/request-your-personal-data-from-moj'>subject access request</a> - your request goes to the MoJ as data controller",
  writeToUs: 'write to us: Disclosure Team, Post point 10.38, 102 Petty France, London, SW1H 9AJ',
  askMoreInformation: 'You can ask for more information about:',
  agreementsWeHave: 'agreements we have on sharing information with other organisations',
  withoutTellingYou: 'when we are allowed to pass on personal information without telling you',
  ourInstructions: 'our instructions to staff on how to collect, use or delete your personal information',
  howWeCheck: 'how we check that the information we hold is accurate and up-to-date',
  mojProtection: 'You can contact the MoJ data protection officer, by:',
  pettyFrance: 'writing to us: Post point 10.38, 102 Petty France, London, SW1H 9AJ',
  emailing:
    'emailing: <a href="mailto:data.compliance@justice.gov.uk" class="govuk-link">data.compliance@justice.gov.uk</a>',
  howToComplain: 'How to complain',
  seeOurComplaints:
    "See our <a class='govuk-link' href='https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service/about/complaints-procedure'>complaints procedure</a> if you want to complain about how we've handled your personal data.",
  writeTo: 'Write to: Post point 10.38, 102 Petty France, London, SW1H 9AJ',
  email: 'Email: <a href="mailto:data.compliance@justice.gov.uk" class="govuk-link">data.compliance@justice.gov.uk</a>',
  youCanAlsoComplain:
    "You can also complain to the <a class='govuk-link' href='https://ico.org.uk/global/contact-us'>Information Commissioner’s Office</a> if you’re not satisfied with our response or believe we are not processing your personal data lawfully.",
});

const cy: typeof en = ({ isDivorce }) => ({
  title: 'Polisi preifatrwydd',
  info:
    'Mae’r polisi preifatrwydd hwn yn egluro pam rydym yn casglu eich data personol a beth rydym yn ei wneud ag ef. Mae hefyd yn egluro eich hawliau a sut i’w gorfodi.',
  whoManages: "Pwy sy’n rheoli'r gwasanaeth hwn",
  managedBy:
    'Gwasanaeth Llysoedd a Thribiwnlysoedd EM (GLlTEM) sy’n rheoli’r gwasanaeth hwn, sef un o asiantaethau gweithredol y Weinyddiaeth Gyfiawnder (MoJ).',
  moj:
    "MoJ yw’r rheolydd data at ddibenion diogelu data. <a class='govuk-link' href='https://www.gov.uk/government/organisations/ministry-of-justice/about/personal-information-charter'>Mae siarter gwybodaeth bersonol yr MoJ</a> yn egluro sut mae'r MoJ yn prosesu data personol.",
  responsibleForDeciding:
    "Fel rhan o’r MoJ, mae GLlTEM yn gyfrifol am benderfynu sut mae eich data personol yn cael ei ddefnyddio ac am ddiogelu'r data personol rydych yn ei ddarparu.",
  moreInformation:
    "Mae rhagor o wybodaeth am ddefnyddio’r gwasanaeth hwn yn y <a class='govuk-link' href='/terms-and-conditions'>telerau ac amodau</a>.",
  thePersonal: 'Y data personol sydd ei angen arnom',
  whenYouUseDivorceService: 'Rydym angen y data personol canlynol ar gyfer y gwasanaeth hwn:',
  applicantName: "enw'r ceisydd",
  respondentName: `enw'r unigolyn y mae'r ceisydd yn ${isDivorce ? 'ysgaru' : 'diddymu eu partneriaeth sifil â nhw'}`,
  changedApplicantName: `tystiolaeth o newid enw'r ceisydd os yw wedi'i newid ers iddynt ${
    isDivorce ? 'briodi' : 'ffurfio eu partneriaeth sifil'
  }`,
  changedRespondentName: `tystiolaeth o newid enw'r unigolyn y mae'r ceisydd eisiau ${
    isDivorce ? 'ysgaru' : 'diddymu eu partneriaeth sifil â nhw'
  } (os gwnaethant ei newid)`,
  marriageCert: `copi o'r ${isDivorce ? 'dystysgrif priodas' : 'dystysgrif partneriaeth sifil'} a'r manylion sydd arni`,
  countryApplicantMarried: 'y wlad y mae’r ceisydd yn preswylio’n arferol ynddi',
  countryRespondentMarried: `y wlad y mae'r unigolyn y mae'r ceisydd eisiau ${
    isDivorce ? 'ei ysgaru' : 'diddymu eu partneriaeth sifil â nhw'
  } yn preswylio'n arferol ynddi`,
  applicantHabitualResidence: "p'un a yw'r ceisydd yn preswylio'n arferol yng Nghymru neu Loegr",
  respondentHabitualResidence: `p'un a yw'r unigolyn y mae'r ceisydd eisiau ${
    isDivorce ? 'ei ysgaru' : 'diddymu eu partneriaeth sifil â nhw'
  } yn preswylio'n arferol yng Nghymru neu Loegr`,
  applicantDomicile: "p'un a yw domisil y ceisydd yng Nghymru neu Loegr",
  respondentDomicile: `p'un a yw domisil yr unigolyn y mae'r ceisydd eisiau ${
    isDivorce ? 'ei ysgaru' : 'diddymu eu partneriaeth sifil â nhw'
  } yng Nghymru neu Loegr`,
  applicantEmailAndPhone: 'cyfeiriadau, cyfeiriadau e-bost a rhifau ffôn y ceisydd',
  respondentEmailAndPhone: `cyfeiriad, cyfeiriad e-bost a rhif ffôn yr unigolyn y mae'r ceisydd eisiau ${
    isDivorce ? 'ei ysgaru' : 'diddymu eu partneriaeth sifil â nhw'
  }`,
  applicantAddressAndNames: 'cyfeiriad, cyfeiriad e-bost a rhif ffôn cyfreithiwr y ceisydd (os oes ganddynt un)',
  respondentAddressAndNames: `cyfeiriad, cyfeiriad e-bost a rhif ffôn cyfreithiwr yr unigolyn y mae'r ceisydd eisiau ${
    isDivorce ? 'ei ysgaru' : 'diddymu eu partneriaeth sifil â nhw'
  } (os oes ganddynt un)`,
  applicantOtherCourtCases: "manylion achosion llys eraill y mae'r ceisydd wedi bod yn ymwneud â nhw",
  respondentOtherCourtCases: `manylion unrhyw achosion eraill y mae'r unigolyn y mae'r ceisydd eisiau ${
    isDivorce ? 'ei ysgaru' : 'diddymu eu partneriaeth sifil â nhw'
  } wedi bod yn ymwneud â nhw (os oes rhai)`,
  receivingNotifications: 'Hysbysiadau',
  youNeedSignUp: `Mae angen ichi gofrestru i gael hysbysiadau i ddefnyddio’r gwasanaeth ${
    isDivorce ? 'ysgaru' : 'diddymu partneriaeth sifil'
  }. Mae hwn yn ofyniad cyfreithiol er mwyn i’r cais fynd yn ei flaen.`,
  storingYourData: 'Storio eich data',
  askedForEmailAddress:
    "Pan fyddwch yn defnyddio'r gwasanaeth hwn fe ofynnir ichi ddefnyddio’ch cyfeiriad e-bost i greu cyfrif. Byddwch yn gallu defnyddio’r cyfeiriad e-bost hwn a chyfrinair i fewngofnodi i wasanaethau eraill GLlTEM.",
  holdYourData: `Tra byddwch yn llenwi neu'n ymateb i gais ${
    isDivorce ? 'am ysgariad' : 'i ddiddymu partneriaeth sifil'
  } byddwn yn cadw eich data am hyd at 6 mis. Os na fyddwch yn cwblhau’r cais yn ystod yr amser hwn, bydd rhaid ichi ddechrau eto.`,
  whenADivorceIsFinalised: `Pan gwblheir ${
    isDivorce ? 'eich ysgariad' : 'diddymiad eich partneriaeth sifil'
  } cedwir manylion yr achos am 18 mlynedd. Ar ôl y cyfnod hwnnw, dilëir peth data (o’r dyfarniad amodol a'r dyfarniad terfynol).`,
  theRemainder:
    'Cedwir gweddill gwybodaeth yr achos am 82 blynedd arall. Ar ôl cyfanswm o 100 mlynedd dilëir y data hwn.',

  whyWeCollect: 'Pam rydym ni’n casglu eich data personol',
  personalData: 'Rydym ni’n casglu eich data personol i:',
  processApplication: 'brosesu eich cais',
  legalRequirements: 'bodloni gofynion cyfreithiol',
  improveService: 'gwella’r gwasanaeth hwn',
  staffUse:
    'Mae ein staff yn defnyddio eich data personol i brosesu eich cais. Maent yn gweithio yn y DU ac mae eich data yn cael ei storio yn y DU.',
  usingYourData: 'Defnyddio eich data',
  asPart:
    "Fel rhan o'ch cais fe ofynnir ichi ddefnyddio’ch cyfeiriad e-bost i greu cyfrif. Byddwch yn gallu defnyddio’r cyfeiriad e-bost hwn a chyfrinair i fewngofnodi i wasanaethau eraill GLlTEM.",
  weMayAskForPermission:
    'Byddwn yn gofyn am eich caniatâd i ddefnyddio’ch cyfeiriad e-bost i anfon negeseuon e-bost atoch trwy’r system GOV.UK Notify. O fewn Ardal Economaidd Ewrop yn unig y mae’r system yn prosesu negeseuon e-bost hyd nes y pwynt y mae negeseuon e-bost yn cael eu trosglwyddo i’r darparwr e-bost rydych chi’n ei ddefnyddio.',
  weUseCookies:
    "Rydym yn defnyddio <a class='govuk-link' href='/cookies'>cwcis</a> i gasglu data am sut rydych yn defnyddio'r gwasanaeth hwn, yn cynnwys:",
  ifYouOpenEmail: 'os byddwch yn agor neges e-bost gennym neu’n clicio ar ddolen mewn e-bost',
  yourComputer: 'cyfeiriad IP eich cyfrifiadur, ffôn symudol neu dabled',
  theRegion: 'yr ardal neu’r dref lle rydych yn defnyddio’ch cyfrifiadur, ffôn symudol neu dabled',
  theWeb: 'y porwr gwe rydych yn ei ddefnyddio',
  sharingYourData: 'Rhannu eich data',
  ifAnother:
    'Pan fydd eich hawliad neu eich cais yn cael ei brosesu, mae’n bosib y byddwn angen cysylltu ag adran, asiantaeth neu sefydliad arall yn y llywodraeth ac efallai y byddwn yn rhannu eich data gyda nhw.',
  dataSharedWithPrintingServiceProvider: `Bydd unrhyw ddata a ddarperir gennych sydd angen ei argraffu yn cael ei rannu gyda Xerox (UK) Ltd. Er enghraifft, bydd y cais ${
    isDivorce ? 'am ysgariad' : 'i ddiddymu partneriaeth sifil'
  } yn cael ei argraffu fel y gellir ei anfon at yr atebydd drwy’r post.`,
  ifYouContactUs:
    "Os byddwch yn cysylltu â ni ac yn gofyn am help gyda'r gwasanaeth rydych yn ei ddefnyddio, efallai y byddwn yn rhannu eich data personol gyda’r Good Things Foundation. Rydym yn gweithio mewn partneriaeth â'r cwmni hwn i gynnig cefnogaeth wyneb yn wyneb.",
  crime:
    'Mewn rhai amgylchiadau efallai y byddwn yn rhannu eich data, er enghraifft er mwyn atal neu i ddatrys trosedd, neu i gynhyrchu ystadegau cyffredinol.',
  weUse:
    "Rydym yn defnyddio Google Analytics i gasglu data am sut y defnyddir gwefan. Mae'r data cyffredinol hwn yn cael ei rannu gyda Google. Mae rhagor o wybodaeth am hyn yn ein <a class='govuk-link' href='/terms-and-conditions'>telerau ac amodau</a>.",
  storeAndShare: 'Storio a rhannu eich data’n rhyngwladol',
  personalInformation:
    "Weithiau efallai y bydd angen inni anfon eich gwybodaeth bersonol tu allan i'r DU. Pan fyddwn yn gwneud hyn, byddwn yn cydymffurfio â chyfraith diogelu data.",
  yourRights: 'Eich hawliau',
  youCanAsk: 'Gallwch ofyn:',
  toSeePersonal: 'i gael gweld y data personol rydym yn ei gadw amdanoch',
  toHavePersonal: "i'r data personol gael ei gywiro",
  toHaveDataRemoved:
    "i'r data personol gael ei ddileu (bydd hyn yn ddibynnol ar yr amgylchiadau, er enghraifft os ydych chi’n penderfynu peidio â pharhau gyda’ch cais)",
  thatAccessIsRestricted:
    "i gyfyngu ar y mynediad at y data personol (er enghraifft, gallwch ofyn i'ch data gael ei storio am gyfnod hirach a pheidio â chael ei ddileu'n awtomatig)",
  ifYouWantToSeePersonal: 'Os ydych eisiau gweld y data personol rydym yn ei gadw amdanoch, gallwch:',
  completeForm:
    "lenwi ffurflen i wneud <a class='govuk-link' href='https://www.gov.uk/government/publications/request-your-personal-data-from-moj'>cais gwrthrych am wybodaeth</a> - bydd eich cais yn mynd i'r rheolydd data, sef MoJ",
  writeToUs: 'ysgrifennu atom yn: Disclosure Team, Post point 10.38, 102 Petty France, Llundain, SW1H 9AJ',
  askMoreInformation: 'Gallwch ofyn am fwy o wybodaeth am:',
  agreementsWeHave: 'gytundebau sydd gennym ar rannu gwybodaeth gyda sefydliadau eraill',
  withoutTellingYou: 'pryd y caniateir inni drosglwyddo gwybodaeth bersonol amdanoch heb roi gwybod ichi',
  ourInstructions: 'ein cyfarwyddiadau i staff ynghylch sut i gasglu, defnyddio neu ddileu eich gwybodaeth bersonol',
  howWeCheck: 'sut rydym yn gwirio bod yr wybodaeth sydd gennym yn gywir ac yn gyfredol',
  mojProtection: 'Gallwch gysylltu â swyddog diogelu data’r MoJ drwy:',
  pettyFrance: 'ysgrifennu atom yn: Post point 10.38, 102 Petty France, Llundain, SW1H 9AJ',
  emailing:
    'anfon neges e-bost i: <a href="mailto:data.compliance@justice.gov.uk" class="govuk-link">data.compliance@justice.gov.uk</a>',
  howToComplain: 'Sut i gwyno',
  seeOurComplaints:
    "Gweler ein <a class='govuk-link' href='https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service/about/complaints-procedure'>proses gwyno</a> os ydych eisiau cwyno am sut rydym wedi trin eich data personol.",
  writeTo: 'Ysgrifennwch at: Post point 10.38, 102 Petty France, Llundain, SW1H 9AJ',
  email:
    'Anfonwch neges e-bost i: <a href="mailto:data.compliance@justice.gov.uk" class="govuk-link">data.compliance@justice.gov.uk</a>',
  youCanAlsoComplain:
    "Gallwch hefyd gyflwyno cwyn i <a class='govuk-link' href='https://ico.org.uk/global/contact-us'>Swyddfa’r Comisiynydd Gwybodaeth</a> os ydych yn anfodlon â’n hymateb neu'n credu nad ydym yn prosesu eich data personol yn gyfreithlon.",
});

const languages = {
  en,
  cy,
};

export const generateContent: TranslationFn = content => {
  return languages[content.language](content);
};
