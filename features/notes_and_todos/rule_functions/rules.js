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
    deleteNote = (noteStatus) => {
        const deleteNoteObject = {
            currentStatus: 'deleted',
            reponseMessage: 'Successfully note deleted'
        }
        return deleteNoteObject;
    }

    addToDoList = (todoListObject) => {
        if (todoListObject.Content === "") {
            return 'Content seems to be missing!!'
        } else if (todoListObject.Title === "") {
            return 'Title seems to be missing!!'
        } else {
            return 'ToDoList has been successfully saved!'
        }
    }

    deleteTodos = (todosStatus) => {
        const deleteTodosObject = {
            currentStatus: 'deleted',
            reponseMessage: 'Successfully todolist deleted'
        }
        return deleteTodosObject;
    }

    updateTodo = (updateTodoObject) => {
        if (updateTodoObject.newTodoTitle === "") {
            return 'Title seems to be missing'
        } else if (updateTodoObject.newTodoContent === "") {
            return 'Content seems to be missing'

        } else {
            return 'Successfully edited'
        }
    }

    bulkdeleteNote = (noteStatus) => {
        const bulkdeleteNoteObject = {
            currentStatus: 'deleted',
            reponseMessage: ' bulk note deleted'
        }
        return bulkdeleteNoteObject;
    }

    bulkdeleteTodos = (todosStatus) => {
        const bulkdeleteTodosObject = {
            currentStatus: 'deleted',
            reponseMessage: 'Successfully bulk todolist deleted'
        }
        return bulkdeleteTodosObject;
    }
}

