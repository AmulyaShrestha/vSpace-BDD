Feature: Login into the system
    User wants to login into the system

    Scenario Outline: User wants to login into the system
        Given The login page appears without any credential
        When All the credential of login is fulfilled as "<username>", "<password>" and clicked on signin button
        Then The dashboard appears with message box as "<successMessage>"

        Examples:
            | username      | password | successMessage                           |
            | Sama Maharjan | sama     | Invalid username or password!!           |
            | Sama007       | sama1234 | Sama007 has been successfully logged in! |