Feature: Bulk delete note
  User want to bulk delete notes

  Scenario Outline: User want to bulk delete notes
    Given User want to delete the "<note>"
    When User selects desired "<note>" proceeds with delete button
    Then The selected "<note>" are deleted

    Examples:
      | note    |


