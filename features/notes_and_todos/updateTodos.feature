Feature: Update todo list

    User wants to edit todo list

    Scenario Outline: User wants to edit todo list
        Given The todo list appears on dashboard as "<initialTodoTitle>", "<initialTodoContent>"
        When The initial todo list is replaced with "<newTodoTitle>", "<newTodoContent>" and clicked on save button
        Then The updated todo list is saved with "<responseMessage>"

       Examples:
            | initialTodoTitle | initialTodoContent | newTodoTitle | newTodoContent    | responseMessage             |
            | Test             | This is test       |              | This is new test  | Title seems to be missing   |
            | Test             | This is test       | Test         |                   | Content seems to be missing |
            | Test             | This is test       | Test One     | This is new test1 | Successfully edited         |
