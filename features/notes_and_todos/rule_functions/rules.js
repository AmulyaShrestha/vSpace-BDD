module.exports = class NotesAndToDos {

    addNote = (noteObject) => {
        if (noteObject.noteContent === "") {
            return 'Content seems to be missing'
        } else if (noteObject.noteTitle === "") {
            return 'Title seems to be missing'
        } else {
            return 'Note has been successfully saved!'
        }
    }

    updateNote = (updateNoteObject) => {
        if (updateNoteObject.newNoteTitle === "") {
            return 'Title seems to be missing'
        } else if (updateNoteObject.newNoteContent === "") {
            return 'Content seems to be missing'

        } else {
            return 'Successfully edited'
        }
    }
}
