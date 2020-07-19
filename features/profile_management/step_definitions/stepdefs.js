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

/**
 *  @story = Recover password with email verification
 *  @storyId = US30
 */
Given(
    "Email box is filled with {string}",
    function (valid_email) {
        // Only shows desc.
    }
);

When("Click on the verify button to send reset {string} and enter {string} and valid token for successful rest", function (
    valid_token, new_password
) {
    this.newPassword = new_password;
    this.validToken = valid_token;
});

Then("Check token for validity and reset with new password if {string} matches successfully", function (
     used_token) {
    if (profileManagement.checkTokenValidity(this.validToken, used_token, this.newPassword)) {
        console.log('Successfully reset password!');
    } else {
        console.log('Tokens did not match');
    }
});

/**
 *  @story = View profile
 *  @storyId = US39
 */
Given(
    "The dashboard of system displays", function () {

    }
);

When("Clicks on profile button which is labeled as {string}", function (profile
) {
    const viewProfileObject = {
        profile: profile
    };
    this.actualOutcome = profileManagement.viewProfile(viewProfileObject);
});

Then("The profile is displayed with the response message as {string}", function (expectedOutcome) {
    assert.equal(this.actualOutcome, expectedOutcome);
    if (this.actualOutcome === expectedOutcome) {
        console.log(expectedOutcome);
    }
});

/**
 *  @story = Maintain session (Remember me)
 *  @storyId = US34
 */
Given(
    "The login page with remember me option displays",
    function () {
        // Only shows desc.
    }
);

When("Clicks on remember me check box to {string}", function (
    remember_account
) {

    this.rememberAccount = remember_account;
});

Then("The account is {string} successfully on next login", function (
    remembered) {
    if (profileManagement.rememberMe(this.rememberAccount, remembered)) {
        console.log('Successfully remember account!');
    } else {
        console.log('Do you want remember your account??');
    }
});


