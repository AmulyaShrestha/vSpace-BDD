Feature: Delete todolist
 
    User wants to delete todolist
 
    Scenario: User wants to delete todolist
    Given The todolist on dashboard appears as "existedTodolist"
    When Click on delete button to "delete"
    Then The todolist from the dashboard is "deleted" with message as "Successfully todolist deleted"