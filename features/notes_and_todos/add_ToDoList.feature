Feature: Add new ToDoList
    User wants to add new todolist

    Scenario Outline: User wants to add new todolist
        Given The void dashboard displays
        When The void dashboard filled with "<Title>", "<Content>", "<status>" and clicked on save button
        Then The todolist is saved with message as "<responseMessage>"

        Examples:
            | Title        | Content                | status     | responseMessage                       |
            |              | to complete assignment | incomplete | Title seems to be missing!!           |
            | Class at 2PM |                        | complete   | Content seems to be missing!!         |
            | Class at 2PM | to attend class        | complete   | ToDoList has been successfully saved! |

