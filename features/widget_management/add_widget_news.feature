Feature: Add Widgets news
  Users want to add news widgets

  Scenario Outline: Users want to add news widgets
    Given Users want to add important news widget "<widgetType>"
    When Users copy link of their preferred news into "<widgetType>"
    Then They can post specified news in  widget "<widgetType>"

    Examples:
      | widgetType        |
      | news |

