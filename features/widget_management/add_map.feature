Feature: Add Widgets map
  Users want to add map widgets

  Scenario Outline: Users want to add map widgets
    Given Users want to add  "<widgetType>"
    When Users selects "<widgetType>" in advance category section
    Then They can drag "<widgetType>" to their desktop and arrange it

    Examples:
      | widgetType        |
      | map               |

