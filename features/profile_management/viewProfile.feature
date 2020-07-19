Feature: View profile
 
    User wants to view profile
 
    Scenario: User wants to view profile
    Given The dashboard of system displays
    When Clicks on profile button which is labeled as "profile"
    Then The profile is displayed with the response message as "Successfully profile is viewed"