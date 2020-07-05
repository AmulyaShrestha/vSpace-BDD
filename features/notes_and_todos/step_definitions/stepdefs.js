const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const notesAndToDosModel = require("../rule_functions/rules");
const notesAndToDos = new notesAndToDosModel();

/**
 *  @story = Update notes
 *  @storyId = US22
 */

Given(
    "The note appears on dashboard as {string}, {string}",
    function (initialNoteTitle, initialNoteContent) {
      this.initialNote = initialNoteTitle, initialNoteContent;
    }
  );

  When("The initial notes is replaced with {string}, {string} and clicked on save button", function (
    newNoteTitle, newNoteContent
  ) {
      const updateNoteObject = {
        newNoteTitle: newNoteTitle,
        newNoteContent: newNoteContent
    };
      this.actualOutcome = notesAndToDos.updateNote(updateNoteObject);
  });

  Then("The updted note is saved with {string}", function (expectedOutcome) {
    assert.equal(this.actualOutcome, expectedOutcome);
    if (this.actualOutcome === expectedOutcome) {
      console.log(expectedOutcome);
    }
  });
  