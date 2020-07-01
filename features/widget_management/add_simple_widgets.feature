Feature: Add Widgets falling into simple criteria
  Users want to add simple category widgets

  Scenario Outline: Users want to add simple category widgets
    Given Appearance of simple widgets category with an option to add "<widgetType>"
    When Users chooses "<widgetType>" from simple widgets category
    Then Widget with "<addedWidgetType>" is added in dashboard.

    Examples:
      | widgetType        | addedWidgetType         |
      | corona_statistics | added corona_statistics |
      | analogue_clock    | added analogue_clock    |
      | youTube_video     | added youTube_video     |
      | calendar          | added calendar          |
      | weather           | added weather           |