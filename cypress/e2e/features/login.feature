Feature: BambooHR Login
  As a BambooHR user
  I want to be able to log in to the application
  So that I can access my account and use its features

  Scenario: User logs in with valid credentials
    Given The user is on the login page
    When The user enters the username and password
    And The user clicks the login button
    Then The user should see the BambooHR dashboard

  Scenario: Unsuccessful login with an invalid username
    Given The user is on the login page
    When The user enters the invalid username and password
    And The user clicks the login button
    Then The user should see an error message "The email or password you entered is invalid."

  Scenario: Unsuccessful login with an empty username
    Given The user is on the login page
    When The user enters an empty username
    And The user clicks the login button
    Then The user should see an error message "Oops! Please enter your email address in order to log in."