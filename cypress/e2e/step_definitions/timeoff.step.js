import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";

Given("The user is on the timeoff request page", () => {
  cy.get(SELECTORS.timeoff.requestTimeOffButton, { timeout: TIMEOUT })
    .should("be.visible")
    .click();
});

When("The user fullfill the form", () => {
  cy.get(SELECTORS.timeoff.startDate, { timeout: 8000 })
    .should("be.visible")
    .type(TEST_DATA.timeoff.startDate);
  cy.get(SELECTORS.timeoff.endDate, { timeout: TIMEOUT })
    .should("be.visible")
    .type(TEST_DATA.timeoff.endDate);
  cy.get(SELECTORS.timeoff.category, { timeout: TIMEOUT })
    .should("be.visible")
    .click();
  cy.get(SELECTORS.timeoff.selectCategory, { timeout: TIMEOUT })
    .should("be.visible")
    .eq(2)
    .click();
  cy.wait(TIMEOUT);
  cy.get(SELECTORS.timeoff.amount, { timeout: TIMEOUT })
    .should("be.visible")
  cy.get(SELECTORS.timeoff.note).should("be.visible").type("test");
});
When("The user submits the timeoff request", () => {
  cy.wait(TIMEOUT);
  cy.get(SELECTORS.timeoff.sendRequest, { timeout: TIMEOUT })
    .should("be.visible")
    .click();
});

Then("The user should be redirect to My info page", () => {
    cy.url().should('contains', '/employees/pto/?id=8');
});

Given("The user is on the Time-Off request page", () => {
    cy.get(SELECTORS.timeoff.headerBoxIcon).should('be.visible').click();
    cy.get(SELECTORS.timeoff.timeRequestsOption).should('be.visible').click();
});
When("The user views a time-off request", () => {
  cy.wait(TIMEOUT);
  cy.get(SELECTORS.timeoff.timeoffRequest, { timeout: TIMEOUT })
    .last()
    .should("be.visible")
    .click();
});
When("The user clicks on Deny", () => {
  cy.wait(TIMEOUT);
  cy.get(SELECTORS.timeoff.denyButton, { timeout: TIMEOUT })
    .should("be.visible")
    .click({force: true});
});
Then("The user should see a modal with the title {string}", (message) => {
  cy.wait(TIMEOUT)
  cy.contains('h3', message).should("exist");
})
