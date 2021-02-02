import { setHeadlessWhen } from '@codeceptjs/configure';

import { config as testConfig } from '../config';

setHeadlessWhen(testConfig.TestHeadlessBrowser);

export const config: CodeceptJS.Config = {
  gherkin: {
    features: './features/*.feature',
    steps: ['../steps/homepage.ts'],
  },
  output: '../../../functional-output/functional/reports',
  helpers: {
    Playwright: {
      url: testConfig.TEST_URL || 'http://localhost:3001',
      show: !testConfig.TestHeadlessBrowser,
      browser: 'chromium',
      waitForTimeout: 15000,
      ignoreHTTPSErrors: true,
    },
  },
  bootstrap: null,
  name: 'nfdiv-frontend',
  plugins: {
    allure: {},
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};