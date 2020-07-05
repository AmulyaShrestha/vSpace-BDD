Feature: Refresh Widgets on refresh button click
  Users want to refresh widget on one click

  Scenario Outline: Users want to refresh widget on one click
    Given Appearance of "<widgetType>" with button refresh
    When User click refresh button on "<widgetType>"
    Then The content of the "<widgetType>" should be refreshed with new content

    Examples:
    |widgetType|
    |corona_statistics|
    | corona_statistics |
    | analogue_clock    |
    | youTube_video     |
    | calendar          |
    | weather           |

