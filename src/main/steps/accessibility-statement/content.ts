import { Translations } from '../../app/controller/GetController';

export const generateContent = ({ isDivorce }: { isDivorce: boolean }): Translations => {
  const en = {
    title: 'Accessibility Statement',
    statement: `Accessibility statement for the apply ${
      isDivorce ? 'for a divorce' : 'end your civil partnership'
    } service`,
    websiteRanBy: 'This website is run by HM Courts & Tribunals Service',
    asManyAsPossible:
      'We want as many people as possible to be able to use this website. For example, that means you should be able to:',
    asManyAsPossibleColours: 'change colours, contrast levels and fonts',
    asManyAsPossibleZoom: 'zoom in up to 300% without the text spilling off the screen',
    asManyAsPossibleKeyboard: 'navigate most of the website using just a keyboard',
    asManyAsPossibleSpeech: 'navigate most of the website using speech recognition software',
    asManyAsPossibleListen:
      'listen to most of the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)',
    abilityNet:
      '<a href="https://mcmw.abilitynet.org.uk" class="govuk-link" target="_blank" aria-label="This link will open in a new tab for AbilityNet">AbilityNet</a> has advice on making your device easier to use if you have a disability.',
    howAccessible: 'How accessible this website is',
    somePartsNot: 'We know some parts of this website aren’t fully accessible, for example:',
    somePartsNotPDF: 'many PDF documents aren’t fully accessible to screen reader software',
    somePartsNotColour: 'colour contrast makes it hard to read text in some parts of the website',
    somePartsNotTextToSpeech: 'text to speech software cannot read all the text on every page',
    somePartsNotEveryLink: 'not every link describes the purpose or destination',
    somePartsNotTextForHyperlinks:
      'the text used for hyperlinks doesn’t always describe the destination and purpose of the link',
    whatToDoIfYouCanAccessParts: 'What to do if you can’t access parts of this website',
    needMoreInformation:
      'If you need information on this website in a different format like accessible PDF, large print, easy read, audio recording or braille:',
    email:
      'email <a href="mailto:HMCTSforms@justice.gov.uk" class="govuk-link" aria-label="This link will open in a new email to HMCTSforms@justice.gov.uk">HMCTSforms@justice.gov.uk</a>',
    phone: 'call 0300 303 0642 (Monday to Friday, 8.30am to 5pm)',
    considerYourRequest: 'We’ll consider your request and get back to you as soon as possible.',
    reportingAccessibility: 'Reporting accessibility problems with this website',
    improveAccessibility:
      'We’re always looking to improve the accessibility of this website. If you find any problems that aren’t listed on this page or think we’re not meeting the requirements of the accessibility regulations contact: <a href="mailto:HMCTSforms@justice.gov.uk" class="govuk-link" aria-label="This link will open in a new email to HMCTSforms@justice.gov.uk">HMCTSforms@justice.gov.uk</a>.',
    enforcementProcedure: 'Enforcement procedure',
    humanRightsCommission:
      'The Equality and Human Rights Commission (EHRC) is responsible for enforcing the <a href="http://www.legislation.gov.uk/uksi/2018/852/contents/made" class="govuk-link" target="_blank" aria-label="This link will open in a new tab for Public Sector Bodies">Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018</a> (the ‘accessibility regulations’).',
    notHappy:
      'If you’re not happy with how we respond to your complaint, <a href="https://www.equalityadvisoryservice.com/" class="govuk-link" target="_blank" aria-label="This link will open in a new tab for Equality Advisory and Support Service">contact the Equality Advisory and Support Service (EASS)</a>.',
    technicalInfo: 'Technical information about this website’s accessibility',
    hmctsIsCommitted:
      'HMCTS is committed to making its website accessible, in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.',
    websiteIsPartiallyCompliant:
      'This website is partially compliant with the <a href="https://www.w3.org/TR/WCAG21/" class="govuk-link" target="_blank" aria-label="This link will open in a new tab for Web Content Accessibility Guidelines">Web Content Accessibility Guidelines version 2.1</a> AA standard, due to the non-compliances listed below.',
    nonAccessibleContent: 'Non accessible content',
    contentListedBelow: 'The content listed below is non-accessible for the following reasons.',
    accessibilityRegulations: 'Non compliance with the accessibility regulations',
    issuesWithLinks: 'Issues with links',
    issuesWithLinksDescription:
      'On some pages, text used for links doesn’t clearly state where the link goes or what its for. This doesn’t meet WCAG 2.1 success criterion 2.4.4 (Link Purpose, In Context).',
    issuesWithHeadings: 'Issues with headings',
    issuesWithHeadingsDescription:
      'On some pages, the order of heading tags is wrong or don’t nest properly. This doesn’t meet WCAG 2.1 success criterion 1.3.1 (Information and Relationships).',
    issuesWithPDF: 'Issues with PDFs and other documents',
    issuesWithPDFDescription:
      'PDFs are used to download and keep legal documents but may not be structured so they’re accessible to a screen reader. This doesn’t meet WCAG 2.1 success criterion 4.1.2 (Name, role value).',
    issuesWithColour: 'Colour contrast',
    issuesWithColourDescription:
      'On some pages the colour of the text and the colour of the background are not in sufficient contrast to each other. This doesn’t meet WCAG 2.1 success criterion 1.4.3 (Contrast, Minimum).',
    issuesWithLanguage: 'Issues with language',
    issuesWithLanguageDescription:
      'On some pages the language has not been set in the code. This doesn’t meet WCAG 2.1 success criterion 3.1.2 (Language of Page).',
    issuesWithOther: 'Other known issues',
    issuesWithOtherDescription1: 'On some pages, we have forms containing empty labels.',
    issuesWithOtherDescription2:
      'Some page elements do not have clear ARIA tags which can effect how screen readers, and ARIA tags that cannot be read by screen readers.',
    issuesWithOtherDescription3: 'Some of the items in the navigation can not be read out using Voice Over.',
    issuesWithOtherDescription4:
      'On some pages, we show progress bars that indicate how far into the service you are. The structure of the progress bars cannot be read clearly by screen readers.',
    improvingAccessibility: 'What we’re doing to improve accessibility',
    planning:
      'We are planning an external accessibility audit and will update our statement before our website is live.',
    statementPrepared: 'This statement was prepared on 19 September 2019.',
  };

  const cy: typeof en = {
    title: 'Datganiad Hygyrchedd',
    statement: `Datganiad hygyrchedd ar gyfer y gwasanaeth gwneud cais ${
      isDivorce ? 'am ysgariad' : 'i ddod â phartneriaeth sifil i ben'
    }`,
    websiteRanBy: 'Gwasanaeth Llysoedd a Thribiwnlysoedd EM sy’n gyfrifol am y wefan hon',
    asManyAsPossible: 'Rydym am i gymaint o bobl â phosibl allu defnyddio’r wefan hon. Golyga hyn y dylech allu:',
    asManyAsPossibleColours: 'newid y lliwiau, y lefelau cyferbyniad a’r ffontiau',
    asManyAsPossibleZoom: 'gwneud y testun hyd at 300% yn fwy heb iddo ddiflannu oddi ar y sgrin',
    asManyAsPossibleKeyboard: 'defnyddio’r rhan fwyaf o’r wefan gan ddefnyddio bysellfwrdd yn unig',
    asManyAsPossibleSpeech: 'defnyddio’r rhan fwyaf o’r wefan gan ddefnyddio meddalwedd adnabod llais',
    asManyAsPossibleListen:
      'gwrando ar y rhan fwyaf o’r wefan gan ddefnyddio darllenydd sgrin (yn cynnwys fersiynau diweddaraf JAWS, NVDA a VoiceOver)',
    abilityNet:
      'Mae gan <a href="https://mcmw.abilitynet.org.uk" class="govuk-link" target="_blank" aria-label="Bydd y ddolen hon yn agor mewn tab newydd ar gyfer AbilityNet">AbilityNet</a> gyngor ar sut i wneud eich dyfais yn haws i’w ddefnyddio os oes gennych anabledd.',
    howAccessible: 'Pa mor hygyrch yw’r wefan hon?',
    somePartsNot: 'Rydym yn gwybod nad yw rhai rhannau o’r wefan hon yn gwbl hygyrch, er enghraifft:',
    somePartsNotPDF: 'ni ellir darllen rhai dogfennau PDF â meddalwedd darllen sgrin',
    somePartsNotColour: 'mae’r lliwiau’n golygu ei bod yn anodd darllen y testun mewn rhai rhannau o’r wefan',
    somePartsNotTextToSpeech: 'ni all meddalwedd adnabod llais ddarllen yr holl destun ar bob tudalen',
    somePartsNotEveryLink: 'nid yw pob dolen yn cynnwys eglurhad o’i phwrpas nac yn dweud i ble mae’n arwain',
    somePartsNotTextForHyperlinks:
      'nid yw’r testun a ddefnyddir ar gyfer hyperddolenni wastad yn egluro eu pwrpas nac yn dweud i ble y maent yn arwain',
    whatToDoIfYouCanAccessParts: 'Beth i’w wneud os na allwch ddefnyddio rhan o’r wefan hon',
    needMoreInformation:
      'Os ydych angen gwybodaeth sydd ar y wefan hon mewn fformat arall e.e. PDF hygyrch, print bras, fformat hawdd ei ddarllen, recordiad sain neu braille:',
    email:
      'anfonwch neges e-bost i <a href="mailto:HMCTSforms@justice.gov.uk" class="govuk-link" aria-label="Bydd y ddolen hon yn agor neges e-bost newydd i HMCTSforms@justice.gov.uk">HMCTSforms@justice.gov.uk</a>',
    phone: 'ffoniwch 0300 303 5171 (dydd Llun i ddydd Gwener, 8.30am - 5pm)',
    considerYourRequest: 'Byddwn yn ystyried eich cais ac yn ymateb cyn gynted â phosibl.',
    reportingAccessibility: 'Rhoi gwybod am broblemau hygyrchedd gyda’r wefan hon',
    improveAccessibility:
      'Rydym wastad yn ceisio gwella hygyrchedd y wefan hon. Os byddwch yn cael unrhyw broblemau nad ydynt wedi’u rhestru ar y dudalen hon, neu’n credu nad ydym yn bodloni rheoliadau hygyrchedd, cysylltwch â: <a href="mailto:HMCTSforms@justice.gov.uk" class="govuk-link" aria-label="Bydd y ddolen hon yn agor neges e-bost newydd i HMCTSforms@justice.gov.uk">HMCTSforms@justice.gov.uk</a>.',
    enforcementProcedure: 'Y Weithdrefn Orfodi',
    humanRightsCommission:
      'Y Comisiwn Cydraddoldeb a Hawliau Dynol (EHRC) sy’n gyfrifol am orfodi <a href="http://www.legislation.gov.uk/uksi/2018/852/contents/made" class="govuk-link" target="_blank" aria-label="Bydd y ddolen hon yn agor mewn ffenestr newydd ar gyfer Cyrff y Sector Gyhoeddus">Rheoliadau Hygyrchedd Cyrff y Sector Gyhoeddus (Gwefannau a Rhaglenni Symudol) (Rhif 2) 2018</a> (y \'rheoliadau hygyrchedd\').',
    notHappy:
      'Os nad ydych chi’n fodlon gyda’r ffordd rydym yn ymateb i’ch cwyn, <a href="https://www.equalityadvisoryservice.com/" class="govuk-link" target="_blank" aria-label="Bydd y ddolen hon yn agor mewn ffenestr newydd ar gyfer y Gwasanaeth Cynghori a Chymorth Cydraddoldeb">cysylltwch â’r Gwasanaeth Cynghori a Chymorth Cydraddoldeb (EASS)</a>.',
    technicalInfo: 'Gwybodaeth dechnegol am hygyrchedd y wefan hon',
    hmctsIsCommitted:
      'Mae GLlTEM wedi ymrwymo i sicrhau bod ei wefannau yn hygyrch, a hynny yn unol â Rheoliadau Hygyrchedd Cyrff y Sector Gyhoeddus (Gwefannau a Rhaglenni Symudol) (Rhif 2) 2018.',
    websiteIsPartiallyCompliant:
      'Mae’r wefan hon yn cydymffurfio’n rhannol â <a href="https://www.w3.org/TR/WCAG21/" class="govuk-link" target="_blank" aria-label="Bydd y ddolen hon yn agor mewn ffenestr newydd ar gyfer y Canllawiau Hygyrchedd Cynnwys Gwe">Canllawiau Hygyrchedd Cynnwys Gwe fersiwn 2.1</a> safon AA, a hynny oherwydd y materion o beidio â chydymffurfio a restrir isod.',
    nonAccessibleContent: 'Cynnwys anhygyrch',
    contentListedBelow: 'Mae’r cynnwys isod yn anhygyrch am y rhesymau canlynol.',
    accessibilityRegulations: 'Nid yw’n cydymffurfio â’r rheoliadau hygyrchedd',
    issuesWithLinks: 'Problemau gyda dolenni',
    issuesWithLinksDescription:
      'Ar rai tudalennau, nid yw’r testun a ddefnyddir ar gyfer rhai dolenni yn egluro pwrpas y ddolen nac yn dweud i ble mae’n arwain. Nid yw hyn yn bodloni WCAG 2.1 maen prawf llwyddiant 2.4.4 (Pwrpas y Ddolen, Ystyried y Cyd-destun).',
    issuesWithHeadings: 'Problemau gyda phenawdau',
    issuesWithHeadingsDescription:
      'Ar rai tudalennau, mae trefn tagiau penawdau neu eu gosodiad yn anghywir. Nid yw hyn yn bodloni WCAG 2.1 maen prawf llwyddiant 1.3.1 (Gwybodaeth a Pherthnasau).',
    issuesWithPDF: 'Problemau gyda dogfennau PDF a dogfennau eraill',
    issuesWithPDFDescription:
      'Defnyddir dogfennau PDF i lwytho dogfennau cyfreithiol a’u cadw ond mae’n bosib nad ydynt wedi’u strwythuro’n briodol fel eu bod yn hygyrch i ddarllenydd sgrin. Nid yw hyn yn bodloni WCAG 2.1 maen prawf llwyddiant 4.1.2 (Enw, Rôl, Gwerth).',
    issuesWithColour: 'Cyferbyniad lliwiau',
    issuesWithColourDescription:
      'Ar rai tudalennau, nid yw lliw y testun a lliw y cefndir yn ddigon gwahanol i’w gilydd. Nid yw hyn yn bodloni WCAG 2.1 maen prawf llwyddiant 1.4.3 (Cyferbyniad isaf).',
    issuesWithLanguage: 'Problemau ieithyddol',
    issuesWithLanguageDescription:
      'Ar rai tudalennau, nid yw’r iaith wedi’i rhoi mewn cod. Nid yw hyn yn bodloni WCAG 2.1 maen prawf llwyddiant 3.1.2 (Iaith tudalen).',
    issuesWithOther: 'Problemau hysbys eraill',
    issuesWithOtherDescription1: 'Ar rai tudalennau, mae gennym ffurflenni sy’n cynnwys labeli gwag.',
    issuesWithOtherDescription2:
      'Nid yw rhai tudalennau’n cynnwys tagiau ARIA clir sy’n golygu na all darllenwyr sgrin na thagiau ARIA ddarllen y tudalennau.',
    issuesWithOtherDescription3: 'Ni ellir defnyddio Voice Over i ddisgrifio cynnwys rhai tudalennau.',
    issuesWithOtherDescription4:
      'Ar rai tudalennau, rydym yn defnyddio bar cynnydd i ddangos faint o gamau sydd gennych ar ôl. Ni all darllenwyr sgrin ddarllen strwythur y barrau cynnydd yn glir.',
    improvingAccessibility: 'Beth rydym yn ei wneud i wella hygyrchedd',
    planning:
      'Byddwn yn cynnal awdit hygyrchedd allanol a byddwn yn diweddaru ein datganiad cyn bydd ein gwefan yn fyw.',
    statementPrepared: 'Paratowyd y datganiad hwn ar 19 Medi 2019.',
  };

  const common = {};

  return { en, cy, common };
};