@loginRequired
Feature: Add a Note in BambooHR
  As a user
  I want to add a note to an employee's profile
  So that I can keep track of important information related to the employee

  Scenario: Successfully adding a note to an employee's profile
    Given The user is on the note page
    When The user clicks and fullfill a note
    And The user submits the note
    Then The user should see a new note