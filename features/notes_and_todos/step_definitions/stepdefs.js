const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const notesAndToDosModel = require("../rule_functions/rules");
const notesAndToDos = new notesAndToDosModel();
/**
 *  @story = Delete Note
 *  @storyId = US39
 */
Given(
    "The note on dashboard appears as {string}",
    function (noteStatus) {
        this.deleteNote = noteStatus;   
    }
);
 
When("Clicks on delete button to {string}", function (noteStatus
) {
    const deleteNoteObject = notesAndToDos.deleteNote(noteStatus);
    this.actualStatus = deleteNoteObject.currentStatus;
    this.actualResponse = deleteNoteObject.reponseMessage;
});
 
Then("The note from the dashboard is {string} with message as {string}", function (expectedStatus,expectedMessage) {
    assert.equal(this.actualResponse, expectedMessage);
    assert.equal(this.actualStatus, expectedStatus);
    console.log(expectedMessage);
});