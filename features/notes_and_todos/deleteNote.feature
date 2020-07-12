Feature: Delete note
 
    User wants to delete note
 
    Scenario: User wants to delete note
    Given The note on dashboard appears as "existedNote"
    When Clicks on delete button to "delete"
    Then The note from the dashboard is "deleted" with message as "Successfully note deleted"