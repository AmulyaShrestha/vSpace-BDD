const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const profileManagementModel = require("../rule_functions/rules");
const profileManagement = new profileManagementModel();

/**
 *  @story = Register into the system
 *  @storyId = US30
 */
Given(
    "The registration page appears with respective fields for user details",
    function () {
        // Only shows desc.
    }
);

When("All the credential of registration is fulfilled as {string}, {string}, {string} and clicked on signup button", function (
    userName, email, age
) {
    const userObject = {
        userName: userName,
        email: email,
        age: age
    };
    this.actualOutcome = profileManagement.registerUser(userObject);
});

Then("The homepage appears with message box as {string}", function (expectedOutcome) {
    assert.equal(this.actualOutcome, expectedOutcome);
    if (this.actualOutcome === expectedOutcome) {
        console.log(expectedOutcome);
    }
});

/**
 *  @story = Logout from the system
 *  @storyId = US39
 */
Given(
    "The logout page appears with user status as {string}",
    function (userStatus) {
        this.logout = userStatus;
    }
);

When("Clicks on the logout button to change the status to {string}", function (userStatus
) {
    const logOutObject = profileManagement.logout(userStatus);
    this.actualStatus = logOutObject.currentStatus;
    this.actualResponse = logOutObject.reponseMessage;
});

Then("The login page appears with message box as {string} and user status finally changes to {string}", function (expectedMessage,expectedStatus) {
    assert.equal(this.actualStatus, expectedStatus);
    assert.equal(this.actualResponse, expectedMessage);
    console.log (expectedMessage);
});




/**
 *  @story = Login into the system
 *  @storyId = US29
 */
Given(
    "The login page appears without any credential",
    function () {
        // Only shows desc.
    }
);

When("All the credential of login is fulfilled as {string}, {string} and clicked on signin button", function (
    userName, password
) {
    const userloginObject = {
        userName: userName,
        password: password
    };
    this.actualOutcome = profileManagement.loginUser(userloginObject);
});

Then("The dashboard appears with message box as {string}", function (expectedOutcome) {
    assert.equal(this.actualOutcome, expectedOutcome);
    if (this.actualOutcome === expectedOutcome) {
        console.log(expectedOutcome);
    }
});
