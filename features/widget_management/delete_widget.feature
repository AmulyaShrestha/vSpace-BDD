Feature: Delete Widgets on refresh button click
  Users want to delete widget on one click

  Scenario Outline: Users want to delete widget on one click
    Given Appearance of "<widgetType>" with button delete
    When User click delete button on "<widgetType>"
    Then The "<widgetType>" should be removed

    Examples:
      |widgetType|
      |corona_statistics|
      | corona_statistics |
      | analogue_clock    |
      | youTube_video     |
      | calendar          |
      | weather           |
