import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";

Given("The user is on the Add New Employee page",() => {
    cy.get(SELECTORS.registeremployee.newEmployee, { timeout: TIMEOUT })
    .should("be.visible")
    .click({force:true});
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.registeremployee.newEmployeeOption, { timeout: TIMEOUT })
    .should("be.visible")
    .click({ multiple: true, force:true });
    cy.contains("span", "Add Anyway").click();
    cy.wait(TIMEOUT)
})
When("The user enters the data in form", () => {
    cy.get(SELECTORS.registeremployee.firstnameField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.newemployee.firstName)
    cy.get(SELECTORS.registeremployee.lastnameField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.newemployee.lastName)
    cy.get(SELECTORS.registeremployee.effectiveDateField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.newemployee.hireDate)
    cy.get(SELECTORS.registeremployee.departmentField,{timeout:TIMEOUT}).scrollIntoView().should("be.visible").click({force:true})
    cy.contains("div", "Finance").click();
    cy.get(SELECTORS.registeremployee.divisionField,{timeout:TIMEOUT}).should("be.visible").click({force:true})
    cy.contains("div", "North America").click();

})
 When("The user submits the employee registration form", () => {
    cy.get(SELECTORS.registeremployee.saveButton,{timeout: TIMEOUT})
    .should("be.visible")
    .click();
 })
 Then("The user should see his name", () => {
    cy.wait(TIMEOUT)
    cy.contains('h1', TEST_DATA.newemployee.firstName + " " + TEST_DATA.newemployee.lastName).should("exist");
  })
  When("The user leaves the First Name field blank", () => {
    cy.get(SELECTORS.registeremployee.lastnameField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.newemployee.lastName)
 
})
Then("The user should see an error message for register employee {string}", (message) => {
    cy.wait(TIMEOUT)
    cy.contains('div', message).should("exist");
  })
