module.exports = class NotesAndToDos {
    addNote = (noteObject) => {
    }
    deleteNote = (noteStatus) => {
        const deleteNoteObject = {
            currentStatus: 'deleted',
            reponseMessage: 'Successfully note deleted'
        }
        return deleteNoteObject;
    }
}
