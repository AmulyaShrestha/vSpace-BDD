Feature: Maintain session (Remember me)

  User wants to check on remember me option

  Scenario: User wants to check on remember me option
    Given The login page with remember me option displays
    When Clicks on remember me check box to "remember_account"
    Then The account is "remembered" successfully on next login