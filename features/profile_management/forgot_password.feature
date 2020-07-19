Feature: Recover password with email verification

  User wants to recover password with his or her valid email

  Scenario Outline: User wants to recover password with his or her valid email
    Given Email box is filled with "<valid_email>"
    When Click on the verify button to send reset "<valid_token>" and enter "<new_password>" and valid token for successful rest
    Then Check token for validity and reset with new password if "<used_token>" matches successfully

    Examples:
      | valid_email          | valid_token | used_token | new_password |
      | validEmail@gmail.com | 2536        | 2536       | validPassword121 |
      | validEmail@gmail.com | 1111        | 6666       | validPassword121 |
