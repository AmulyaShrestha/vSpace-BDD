Feature: Register into the system

  User wants to register new account

  Scenario Outline: User wants to register new account
    Given The registration page appears with respective fields for user details
    When All the credential of registration is fulfilled as "<username>", "<email>", "<age>" and clicked on signup button
    Then The homepage appears with message box as "<responseMessage>"

    Examples:
      | username      | email               | age | responseMessage                   |
      | Anjeela Thapa | something.com       | 20  | Username or Email invalid!        |
      | Sama007       | sama@gmail.com      | 23  | Sama007 already exists!           |
      | DikshyaJeon   | dikshya@gmail.com   | 22  | DikshyaJeon has been registered!  |
      | AnjeelaThapa  | something@gmail.com | 20  | AnjeelaThapa has been registered! |
