module.exports = class NotesAndToDos {
    updateNote = (updateNoteObject) => {
        if (updateNoteObject.newNoteTitle === "")
        {
            return 'Title seems to be missing'
        }

        else if (updateNoteObject.newNoteContent === "")
        {
            return 'Content seems to be missing'

        }

        else {
            return 'Successfully edited'
        }
    }
}
