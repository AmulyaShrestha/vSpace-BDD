Feature: Bulk delete todo
  User want to bulk delete todo

  Scenario Outline: User want to bulk delete todo
    Given User want to delete the "<todo>"
    When User selects desired "<todo>" proceeds with delete button
    Then The select "<todo>" are deleted

    Examples:
      | todo    |

