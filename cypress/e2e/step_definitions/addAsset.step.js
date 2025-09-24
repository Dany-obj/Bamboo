import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("The user is on the Assets page",() => {
    cy.get(SELECTORS.pagetabs.myinfoTab, { timeout: TIMEOUT })
    .should("be.visible").click();
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.myinfotabs.assets).click(); 
    cy.wait(TIMEOUT)
})
When("The user clicks on Add New Asset", () => {
   cy.wait(10000)
    cy.contains("span", "Add Entry",{timeout:10000}).click({force:true});
    cy.wait(TIMEOUT)
 
})
 When("The user selects the asset type", () => {
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.addasset.assetcategoryField, { timeout: TIMEOUT }).should("be.visible").click().click()
    cy.contains('div.fab-MenuOption__row > div', 'Cell Phone').click({ force: true });
 })
 When("The user submits the asset information", () => {
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.addasset.saveButton, { timeout: TIMEOUT }).find("span").contains("Save").should("be.visible").click({ force:true });
 })
 
 Then("The user should see a message {string}", (message) =>  {
    cy.contains("div", `${message}`).should("exist");
  })
