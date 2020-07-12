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

Then("The updated note is saved with {string}", function (expectedOutcome) {
  assert.equal(this.actualOutcome, expectedOutcome);
  if (this.actualOutcome === expectedOutcome) {
    console.log(expectedOutcome);
  }
});


/**
 *  @story = Add new ToDoList
 *  @storyId = US24
 */
Given(
  "The void dashboard displays",
  function () {
    // Only shows desc.
  }
);

When("The void dashboard filled with {string}, {string}, {string} and clicked on save button", function (
  Title, Content, status
) {
  const todoListObject = {
    Title: Title,
    Content: Content,
    status: status
  };
  this.actualOutcome = notesAndToDos.addToDoList(todoListObject);
});

Then("The todolist is saved with message as {string}", function (expectedOutcome) {
  assert.equal(this.actualOutcome, expectedOutcome);
  if (this.actualOutcome === expectedOutcome) {
    console.log(expectedOutcome);
  }
});