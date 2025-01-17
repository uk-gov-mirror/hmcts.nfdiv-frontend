import { config as testConfig } from '../config';

const { I, login } = inject();

Before(test => {
  // Retry failed scenarios x times
  test.retries(3);
});

export const iAmOnPage = (text: string): void => {
  const url = new URL(text, testConfig.TEST_URL);
  if (!url.searchParams.has('lng')) {
    url.searchParams.set('lng', 'en');
  }
  I.amOnPage(url.toString());
};
Given('I go to {string}', iAmOnPage);

Then('the page URL should be {string}', (url: string) => {
  I.waitUrlEquals(url);
});

Given('I login', () => {
  login('user');
});

export const iClick = (text: string): void => {
  I.waitForText(text);
  I.click(text);
};

When('I click {string}', iClick);
When('I select {string}', iClick);

When('I select {string} for {string}', (optionLabel: string, fieldLabel: string) => {
  I.checkOption(optionLabel, `//*[contains(text(), '${fieldLabel}')]/..`);
});

Given('I choose {string} from {string}', (option: string, select: string) => {
  I.selectOption(select, option);
});

Then('I expect the page title to be {string}', (title: string) => {
  I.seeInTitle(title);
});

Then('the page should include {string}', (text: string) => {
  I.see(text);
});

Then('the page should not include {string}', (text: string) => {
  I.dontSee(text);
});

Then('the form input {string} should be {string}', (formInput: string, value: string) => {
  I.seeInField(formInput, value);
});

Then('{string} should be ticked', (text: string) => {
  I.seeCheckboxIsChecked(text);
});

Then('I type {string}', (text: string) => {
  I.type(text);
});

export const iClearTheForm = (): void => {
  I.executeScript(() => {
    const checkedInputs = document.querySelectorAll('input:checked') as NodeListOf<HTMLInputElement>;
    for (const checkedInput of checkedInputs) {
      checkedInput.checked = false;
    }

    const clearInputs = (inputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement>) => {
      for (const input of inputs) {
        input.value = '';
      }
    };

    clearInputs(document.querySelectorAll('textarea'));
    clearInputs(document.querySelectorAll('input[type="text"]'));
  });
};
Given('I clear the form', iClearTheForm);

Given('I reset the postcode lookup form', () => {
  iClearTheForm();

  I.executeScript(() => {
    (document.querySelector('[data-link="resetPostcodeLookup"]') as HTMLAnchorElement).click();
  });
});

Given("I've said I'm divorcing my husband", () => {
  I.amOnPage('/your-details');
  iClearTheForm();
  I.checkOption('My husband');
  I.click('Continue');
});

Given("I've said I do not have my husband's email address", () => {
  I.amOnPage('/their-email-address');
  iClearTheForm();
  I.checkOption('I do not know their email address');
  I.click('Continue');
});
