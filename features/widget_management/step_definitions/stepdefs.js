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
