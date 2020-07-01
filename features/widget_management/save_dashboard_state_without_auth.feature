Feature: Save dashboard state without authentication (Sign up)
    Users want to save dashboard state without siging up into the application

    Scenario Outline: Users want to save dashboard state without siging up into the application
        Given Modified dashboard layout with added widgets alog with a button to save current state
        When Clicks on the save state button which triggers the saveState method resulting the "<dashboardArray>" to get stored in local storage
        Then Entire layout with widgets positiong and sizing will be stored in local storage as "<storedDashboardArray>"

        Examples:
            | dashboardArray         | storedDashboardArray   |
            | [{id: '1'}, {id: '2'}] | [{id: '1'}, {id: '2'}] |