import fs from 'fs'
import chalk from 'chalk'

export const getNotes = () => {
    return "Your notes..."
}

export const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New note taken')
    } else {
        console.log('Note title taken')
    }
}

export const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter(note => note.title !== title)

    if(updatedNotes.length === notes.length) {
        console.log(chalk.red("Note not found"))
        return
    }

    saveNotes(updatedNotes)
    console.log(chalk.green("Note removed"))
}

export const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse('Your notes'))

    notes.forEach(note => console.log(note.title))
}

export const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find(note => note.title === title);

    if(!note) {
        console.log(chalk.red.inverse("Note not found!"))
        return
    }
    console.log(chalk.inverse(note.title))
    console.log(note.body)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}