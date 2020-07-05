Feature: Update notes

    User wants to edit notes

    Scenario Outline: User wants to edit notes
        Given The note appears on dashboard as "<initialNoteTitle>", "<initialNoteContent>"
        When The initial notes is replaced with "<newNoteTitle>", "<newNoteContent>" and clicked on save button
        Then The updted note is saved with "<responseMessage>"

        Examples:
            | initialNoteTitle | initialNoteContent | newNoteTitle | newNoteContent    | responseMessage             |
            | Test             | This is test       |              | This is new test  | Title seems to be missing   |
            | Test             | This is test       | Test         |                   | Content seems to be missing |
            | Test             | This is test       | Test One     | This is new test1 | Successfully edited         |
