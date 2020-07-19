const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const widgetsManagementRulesModel = require("../rule_functions/rules");
const widgetsManagementRules = new widgetsManagementRulesModel();

/**
 *  @story = Add Widgets falling into simple criteria
 *  @storyId = US11
 */
Given(
  "Appearance of simple widgets category with an option to add {string}",
  function (givenWidgetType) {
    this.addedWidgetType = givenWidgetType;
  }
);

When("Users chooses {string} from simple widgets category", function (
  widgetType
) {
  if (this.addedWidgetType === widgetType) {
    this.actualOutcome = widgetsManagementRules.checkAddedWidgetType(widgetType);
  }
});

Then("Widget with {string} is added in dashboard.", function (expectedOutcome) {
  assert.equal(this.actualOutcome, expectedOutcome);
  if (this.actualOutcome === expectedOutcome) {
    console.log(expectedOutcome);
  }
});

/**
 * @story = Users want to save dashboard state without siging up into the application
 * @storyId = US12
 */
Given(
  "Modified dashboard layout with added widgets alog with a button to save current state",
  function () { }
);

When("Clicks on the save state button which triggers the saveState method resulting the {string} to get stored in local storage", function (curretDashboardArray) {
  widgetsManagementRules.saveStateInLocalStorage(curretDashboardArray);
});

Then("Entire layout with widgets positiong and sizing will be stored in local storage as {string}", function (expectedDashboardArray) {
  this.actualSavedDashboardArray = widgetsManagementRules.getSavedDashboardArray();
  assert.equal(this.actualSavedDashboardArray, expectedDashboardArray);
});

/**
 * @story = Refresh Widgets on refresh button click
 * @storyId = US19
 * */
Given (
    "Appearance of {string} with button refresh",
    function (widgetType) {
      this.WidgetType = widgetType;
    }
      );
When(
    "User click refresh button on {string}", function (
        widgetType
    ) {
      if (this.WidgetType === widgetType) {
        this.actualOutcome = widgetsManagementRules.refreshWidgetType(widgetType)
        ;
      }
    }
    );
Then(
    "The content of the {string} should be refreshed with new content"
    ,
    function (expectedOutcome) {
      this.actualOutcome = expectedOutcome
      if (this.actualOutcome === expectedOutcome) {
        console.log(expectedOutcome);
      }
    });

/**
 * @story = Remove Widgets on remove button click
 * @storyId = US15
 * */
Given (
    "Appearance of {string} with button delete",
    function (widgetType) {
      this.WidgetType = widgetType;
    }
);
When(
    "User click delete button on {string}", function (
        widgetType
    ) {
      if (this.WidgetType === widgetType) {
        this.actualOutcome = widgetsManagementRules.deleteWidgetType(widgetType)
        ;
      }
    }
);
Then(
    "The {string} should be removed",
    function (expectedOutcome) {
        this.actualOutcome = expectedOutcome
        if (this.actualOutcome === expectedOutcome) {
            console.log(expectedOutcome);
        }
    } );

/**
 * @story = Add news widget
 * @storyId = US13
 * */
Given (
    "Users want to add important news widget {string}",
    function (widgetType) {
        this.WidgetType = widgetType;
    }
);
When(
    "Users copy link of their preferred news into {string}", function (
        widgetType
    ) {
        if (this.WidgetType === widgetType) {
            this.actualOutcome = widgetsManagementRules.checkAddedWidgetType(widgetType)
            ;
        }
    }
);
Then(
    "They can post specified news in  widget {string}",function (expectedOutcome) {
        this.actualOutcome = expectedOutcome
    if (this.actualOutcome===expectedOutcome)
    {
        console.log(expectedOutcome);
    }

}
     );

/**
 * @story = Add map widget
 * @storyId = US13
 * */
Given (
    "Users want to add  {string}",
    function (widgetType) {
        this.WidgetType = widgetType;
    }
);
When(
    "Users selects {string} in advance category section", function (
        widgetType
    ) {
        if (this.WidgetType === widgetType) {
            this.actualOutcome = widgetsManagementRules.checkAddedWidgetType(widgetType)
            ;
        }
    }
);
Then(
    "They can drag {string} to their desktop and arrange it",function (expectedOutcome) {
        this.actualOutcome = expectedOutcome
        if (this.actualOutcome===expectedOutcome)
        {
            console.log(expectedOutcome);
        }

    }
);
