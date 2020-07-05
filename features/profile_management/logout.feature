Feature: Logout from the system

    User wants to logout from the system

    Scenario: User wants to logout from the system
        Given The logout page appears with user status as "loggedIn"
        When Clicks on the logout button to change the status to "notSignedIn"
        Then  The login page appears with message box as "Successfully logged out" and user status finally changes to "notSignedIn"