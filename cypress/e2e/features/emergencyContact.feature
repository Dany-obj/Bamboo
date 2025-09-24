@loginRequired
Feature: Add an Emergency Contact in BambooHR
  As a user
  I want to add an emergency contact to an employee's profile
  So that I can have their emergency information available

  Scenario: Successfully adding an emergency contact to an employee's profile
    Given The user is on the Emergency Contacts page
    When The user clicks on Add Emergency Contact
    And The user enters the contact name
    And The user enters the relationship
    And The user enters the phone number
    And The user submits the emergency contact information
    Then The user should see a confirmation message for emergency contact "Your changes have been saved."

 Scenario: Successfully deleting an emergency contact
    Given The user is on the Emergency Contacts page
    When The user clicks on contact name
    And The user deletes emergency contact
    Then The user should see the message for emergency contact "No emergency contacts have been added for this employee."