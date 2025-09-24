import '@shelex/cypress-allure-plugin';

export const TIMEOUT = 10000
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });