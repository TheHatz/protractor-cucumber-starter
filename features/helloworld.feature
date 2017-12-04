# Happy path feature to verify cucumber environment
Feature: As a test automation engineer,
  I want to verify my cucumber environment is set up correctly,
  so that I can begin writing automated tests



  Scenario: Happy path - output text to console
    Given I have configured my test environment
    When  I run my test
    Then  I output "Hello World" to the console
