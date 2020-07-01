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

When("All the credential of registraion is fulfilled as {string}, {string}, {string} and clicked on signup button", function (
    userName, email, age
) {
    const userObject = {
        userName: userName,
        email: email,
        age: age
    };
    this.actualOutcome = profileManagement.registerUser(userObject);
});

Then("The homepage appears with successfully login message box as {string}", function (expectedOutcome) {
    assert.equal(this.actualOutcome, expectedOutcome);
    if (this.actualOutcome === expectedOutcome) {
        console.log(expectedOutcome);
    }
});

git init
git add README.md
git commit - m "first commit"
git remote add origin https://github.com/AmulyaShrestha/RecyclerViewAndroid.git
git push - u origin master