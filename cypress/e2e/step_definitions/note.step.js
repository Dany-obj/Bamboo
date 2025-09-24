import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";

Given("The user is on the note page",() => {
    cy.get(SELECTORS.pagetabs.myinfoTab, { timeout: TIMEOUT })
    .should("be.visible").click();
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.myinfotabs.notes, { timeout: TIMEOUT })
    .should("be.visible").click();
})
When("The user clicks and fullfill a note", () => {
    cy.get(SELECTORS.notesTab.addnoteField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.notes.addNote)
 
})

 When("The user submits the note", () => {
    cy.get(SELECTORS.notesTab.postButton, { timeout: TIMEOUT }).contains("Post").should("be.visible").click();
 })
 
 Then("The user should see a new note", () =>  {
    cy.get(SELECTORS.notesTab.commentNote, { timeout: TIMEOUT }).contains(`${TEST_DATA.notes.addNote}`).should("exist");
  })
