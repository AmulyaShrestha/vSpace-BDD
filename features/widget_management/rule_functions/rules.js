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

    refreshWidgetType = (widgetType) =>{
        switch (widgetType) {
            case "corona_statistics":
                return `refreshed ${widgetType}`;
                break;
            case "analogue_clock":
                return `refreshed ${widgetType}`;
                break;
            case "youTube_video":
                return `refreshed ${widgetType}`;
                break;
            case "calendar":
                return `refreshed ${widgetType}`;
                break;
            case "weather":
                return `refreshed ${widgetType}`;
                break;
        }
    };

    deleteWidgetType = (widgetType) =>{
        switch (widgetType) {
            case "corona_statistics":
                return `deleted ${widgetType}`;
                break;
            case "analogue_clock":
                return `deleted ${widgetType}`;
                break;
            case "youTube_video":
                return `deleted ${widgetType}`;
                break;
            case "calendar":
                return `deleted ${widgetType}`;
                break;
            case "weather":
                return `deleted ${widgetType}`;
                break;
        }
    };
}
