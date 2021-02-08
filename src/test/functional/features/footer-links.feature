Feature: Footer Links

  Background:
    Given I am on divorce homepage
    And I am on the admin portal sign in page
    When I fill in the Username and Password fields with a valid login
    And click the Sign In button
    Then I expect the page header to be "Divorce - GOV.UK"

  Scenario: Load Terms and Conditions Page
    When I click the "Terms and conditions" link
    Then the page should include "Terms and conditions"