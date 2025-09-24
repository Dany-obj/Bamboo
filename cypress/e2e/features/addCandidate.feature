@loginRequired
Feature: Register a New Job with a Candidate in BambooHR
  As a user
  I want to register a new job and associate it with a candidate
  So that I can track the candidate's application process in BambooHR

  Scenario: Successfully registering a new job with a candidate
    Given The user is on the Create job opening
    When The user enters the job title
    And The user selects the job type Full-Time
    And The user enters the job description 
    And The user creates a new job
    And The user is on new candidate page
    And The user enters the candidate's first name 
    And The user enters the candidate's last name 
    And The user submits the new job with the candidate information
    Then The user should be in new candidate page
