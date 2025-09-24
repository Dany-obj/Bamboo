import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";

Given("The user is on the Create job opening",() => {
    cy.get(SELECTORS.pagetabs.hiringTab, { timeout: TIMEOUT })
    .should("be.visible").click();
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.addjob.addJobButton, { timeout: TIMEOUT })
    .eq(0)
    .should("be.visible")
    .click();
    cy.wait(TIMEOUT)
    
    
})
When("The user enters the job title", () => {
   cy.wait(TIMEOUT)
    cy.get(SELECTORS.addjob.postingtitle, { timeout: TIMEOUT }).should("be.visible").type(TEST_DATA.newJob.postingTitle)
    cy.get(SELECTORS.addjob.jobstatusField, { timeout: TIMEOUT }).should("be.visible").click({force: true})
    .type('o')
    .trigger('keydown', { keyCode: 13 });
    cy.get(SELECTORS.addjob.hiringleadField, { timeout: TIMEOUT }).should("be.visible").click({force: true});
    cy.wait(TIMEOUT)
    cy.contains("div", "Aaron Eckerly").click();
    cy.get(SELECTORS.addjob.employeetypeField, { timeout: TIMEOUT }).should("be.visible").click();
    cy.wait(TIMEOUT)
 
})
 When("The user selects the job type Full-Time", () => {
    cy.contains("div", "Full-Time").click();
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.addjob.joblocationField, { timeout: TIMEOUT }).should("be.visible").click();
 })
 When("The user enters the job description", () => {
    cy.get(SELECTORS.addjob.jobdescriptionField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.newJob.jobDescription)
 })
 When("The user creates a new job", () => {
    for (let i=0; i<TEST_DATA.newJob.numberClicks; i++){
        cy.get(SELECTORS.addjob.nextButton, { timeout: TIMEOUT }).should("be.visible").click();
        cy.wait(TIMEOUT)
    }
 })
 When("The user is on new candidate page", () => {
        cy.wait(TIMEOUT)
        cy.get(SELECTORS.addcandidate.newcandidateLink, { timeout: TIMEOUT }).should("be.visible").click();
 })
 When("The user enters the candidate's first name", () => {
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.addcandidate.firstnameField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.newCandidate.firstName)
 })
 When("The user enters the candidate's last name", () => {
    cy.get(SELECTORS.addcandidate.lastnameField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.newCandidate.lastName)
 })
 When("The user submits the new job with the candidate information", () => {
    cy.get(SELECTORS.addcandidate.saveButton, { timeout: TIMEOUT }).should("be.visible").click();
    cy.wait(TIMEOUT)
 })
 
 Then("The user should be in new candidate page", () => {
    cy.wait(TIMEOUT)
    cy.contains("h1", `${TEST_DATA.newCandidate.firstName} ${TEST_DATA.newCandidate.lastName}`).should("exist");
  })
