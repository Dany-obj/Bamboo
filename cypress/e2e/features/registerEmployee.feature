@loginRequired
Feature: Register a New Employee in BambooHR
  As a user
  I want to register a new employee
  So that the employee can be added to the BambooHR system

  Scenario: Successfully registering a new employee
    Given The user is on the Add New Employee page
    When The user enters the data in form
    And The user submits the employee registration form
    Then The user should see his name

  Scenario: Attempting to register a new employee with an empty first name
    Given The user is on the Add New Employee page
    When The user leaves the First Name field blank
    And The user submits the employee registration form
    Then The user should see an error message for register employee "Whoops... No worries. Please fix any missing or incorrect information and try again."