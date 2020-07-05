Feature: Add new Note
    User wants to add new note

    Scenario Outline: User wants to add new note
        Given The clean dashboard displays
        When The clean dashboard filled with "<noteTitle>", "<noteContent>" and clicked on save button
        Then The note is saved with message as "<responseMessage>"

        Examples:
            | noteTitle    | noteContent | responseMessage                   |
            |              | Agile Class | Title seems to be missing         |
            | Class at 2PM |             | Content seems to be missing       |
            | Class at 2PM | Agile Class | Note has been successfully saved! |

