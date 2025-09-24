@loginRequired
Feature: Time-off Request in BambooHR
  As a BambooHR user
  I want to be able to request time off
  So that I can manage my leave days

  
  Scenario: User submits a valid time-off request
    Given The user is on the timeoff request page
    When The user fullfill the form
    And The user submits the timeoff request
    Then The user should be redirect to My info page

  Scenario: Successfully denying a time-off request
    Given The user is on the Time-Off page
    When The user views a time-off request
    And The user clicks on Deny
    Then The user should see a modal with the title "Denied Time Off Request"

 
