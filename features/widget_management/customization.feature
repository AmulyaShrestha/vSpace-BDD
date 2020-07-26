Feature: Selection of theme
  Selection of theme

  Scenario Outline: Selection of theme
    Given Users wants to decorate their "<theme>"
    When Users go to their preferred "<theme>" and selects edit option
    Then can chose variety of colors to decorate their "<theme>"

    Examples:
      | theme        |
      | light |
      | dark |

