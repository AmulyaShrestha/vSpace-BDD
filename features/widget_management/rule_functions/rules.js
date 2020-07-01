module.exports = class WidgetsManagementRules {
    checkAddedWidgetType = (widgetType) => {
        switch (widgetType) {
            case "corona_statistics":
                return `added ${widgetType}`;
                break;
            case "analogue_clock":
                return `added ${widgetType}`;
                break;
            case "youTube_video":
                return `added ${widgetType}`;
                break;
            case "calendar":
                return `added ${widgetType}`;
                break;
            case "weather":
                return `added ${widgetType}`;
                break;
        }
    };

    saveStateInLocalStorage = (dashboardArray) => {
        this.savedDahoardArray = dashboardArray;
    };

    getSavedDashboardArray = () => {
        return this.savedDahoardArray;
    }
}
