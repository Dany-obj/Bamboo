import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";

Given("The user is on the Benefits page",() => {
    cy.get(SELECTORS.pagetabs.myinfoTab, { timeout: TIMEOUT })
    .should("be.visible").click();
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.myinfotabs.benefits, { timeout: TIMEOUT })
    .should("be.visible").click({force: true});
    cy.wait(TIMEOUT)
    });
    
When("The user clicks on Edit Benefit", () => {
    cy.get(SELECTORS.benefitsTab.benefitCard, { timeout: TIMEOUT }).eq(0).find(SELECTORS.benefitsTab.benefitButton).find("button").should("be.visible").click({force: true})
    cy.get(SELECTORS.benefitsTab.menuitem, { timeout: TIMEOUT }).eq(0).should("be.visible").click()
    cy.wait(TIMEOUT)
})
 When("The user updates the benefit", () => {
    cy.get(SELECTORS.benefitsTab.datewaivedField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.benefits.coverageDateEdit)
 })
 When("The user submits the benefit information", () => {
    cy.get(SELECTORS.benefitsTab.saveButton, { timeout: TIMEOUT }).eq(0).should("be.visible").click()
 })
 Then("The user should see a confirmation message for benefits {string}", (message) => {
    cy.wait(3000)
    cy.contains('div', message).should("exist");
  })
  When("The user clicks on Enroll in Benefit", () => {
    cy.get(SELECTORS.benefitsTab.benefitCard, { timeout: TIMEOUT }).eq(0).find(SELECTORS.benefitsTab.benefitButton).find("button").should("be.visible").click({force: true})
    cy.get(SELECTORS.benefitsTab.menuitem, { timeout: TIMEOUT }).eq(1).should("be.visible").click()
    cy.wait(TIMEOUT)
 
})
  When("The user selects the benefit", () => {
    cy.get(SELECTORS.benefitsTab.coverageField, { timeout: TIMEOUT }).should("be.visible").click()
    cy.get(SELECTORS.benefitsTab.employeeCoverage).contains('div', 'Employee').click();
    cy.wait(TIMEOUT)
 
})
When("The user clicks on Terminate Enrollment", () => {
    cy.get(SELECTORS.benefitsTab.benefitCard, { timeout: TIMEOUT }).eq(0).find(SELECTORS.benefitsTab.benefitButton).find("button").should("be.visible").click({force: true})
    cy.get(SELECTORS.benefitsTab.menuitem, { timeout: TIMEOUT }).eq(2).should("be.visible").click()
    cy.wait(TIMEOUT)
})
When("The user selects the termination date", () => {
    cy.get(SELECTORS.benefitsTab.datewaivedField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.benefits.coverageDateTerminate)
})