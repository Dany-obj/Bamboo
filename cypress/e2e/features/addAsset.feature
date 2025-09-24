@loginRequired
Feature: Add an Asset in BambooHR
  As a user
  I want to add an asset to an employee's profile
  So that I can track company assets assigned to employees

  Scenario: Successfully adding an asset to an employee's profile
    Given The user is on the Assets page
    When The user clicks on Add New Asset
    And The user selects the asset type
    And The user submits the asset information
    Then The user should see a message "Your changes have been saved."

  Scenario: Attempting to add an asset without providing required information
    Given The user is on the Assets page
    When The user clicks on Add New Asset
    And The user submits the asset information
    Then The user should see a message "No new data was entered."