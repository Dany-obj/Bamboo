import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";

Given("The user is on the Emergency Contacts page",() => {
    cy.get(SELECTORS.pagetabs.myinfoTab, { timeout: TIMEOUT })
    .should("be.visible").click();
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.myinfotabs.emergency, { timeout: TIMEOUT })
    .should("be.visible").click({force: true});
    cy.wait(TIMEOUT)
    });
    
When("The user clicks on Add Emergency Contact", () => {
    cy.get(SELECTORS.emergencyTab.addContactButton, { timeout: TIMEOUT }).scrollIntoView().should("be.visible").click();
    cy.wait(TIMEOUT)
 
})
 When("The user enters the contact name", () => {
    cy.get(SELECTORS.emergencyTab.nameContactField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.emergency.nameEmergency)
 })
 When("The user enters the relationship", () => {
    cy.get(SELECTORS.emergencyTab.relationshipField, { timeout: TIMEOUT }).should("be.visible").click();
 })
 When("The user enters the phone number", () => {
    cy.get(SELECTORS.emergencyTab.homephoneField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.emergency.homePhone)
 })
 When("The user submits the emergency contact information", () => {
    cy.get(SELECTORS.emergencyTab.savechangesButton, { timeout: TIMEOUT }).contains("Save Changes").should("be.visible").click();
 })
 Then("The user should see a confirmation message for emergency contact {string}", (message) => {
    cy.wait(TIMEOUT)
    cy.contains('div', message).should("exist");
  })
  When("The user clicks on contact name", () => {
    cy.get(SELECTORS.emergencyTab.nameContactField, { timeout: TIMEOUT }).should("be.visible").click();
 })
 When("The user deletes emergency contact", () => {
    cy.get(SELECTORS.emergencyTab.deleteContactButton, { timeout: TIMEOUT }).eq(0).should("be.visible").click({force: true});
    cy.contains("span", "Delete Contact").click();
 })
 Then("The user should see the message for emergency contact {string}", (message) => {
    cy.wait(TIMEOUT)
    cy.contains('h3', message).should("exist");
  })