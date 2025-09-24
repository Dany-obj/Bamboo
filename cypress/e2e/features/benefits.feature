@loginRequired
Feature: Edit a Benefit in BambooHR
  As a user
  I want to edit an existing benefit for an employee
  So that I can update the benefit details

  Scenario: Successfully editing a benefit
    Given The user is on the Benefits page
    When The user clicks on Edit Benefit
    And The user updates the benefit
    And The user submits the benefit information
    Then The user should see a confirmation message for benefits "Employee benefit updated"

  Scenario: Successfully enrolling an employee in a benefit
    Given The user is on the Benefits page
    When The user clicks on Enroll in Benefit
    And The user selects the benefit
    And The user submits the benefit information
    Then The user should see a confirmation message for benefits "Successfully enrolled. Other medical enrollments will be automatically terminated or waived."

  Scenario: Successfully terminating an employee's benefit enrollment
    Given The user is on the Benefits page
    When The user clicks on Terminate Enrollment
    And The user selects the termination date
    And The user submits the benefit information
    Then The user should see a confirmation message for benefits "Benefit coverage terminated"