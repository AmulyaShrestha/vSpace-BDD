const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const notesAndToDosModel = require("../rule_functions/rules");
const notesAndToDos = new notesAndToDosModel();

/**
 *  @story = Add new Note
 *  @storyId = US21
 */
Given(
    "The clean dashboard displays",
    function () {
        // Only shows desc.
    }
);

When("The clean dashboard filled with {string}, {string} and clicked on save button", function (
    noteTitle, noteContent
) {
    const noteObject = {
        noteTitle: noteTitle,
        noteContent: noteContent
    };
    this.actualOutcome = notesAndToDos.addNote(noteObject);
});

Then("The note is saved with message as {string}", function (expectedOutcome) {
    assert.equal(this.actualOutcome, expectedOutcome);
    if (this.actualOutcome === expectedOutcome) {
        console.log(expectedOutcome);
    }
});
