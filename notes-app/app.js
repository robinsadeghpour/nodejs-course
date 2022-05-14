import _yargs from "yargs";
import {hideBin} from "yargs/helpers";
import {addNote, removeNote, listNotes, readNote} from "./notes.js";

const yargs = _yargs(hideBin(process.argv));


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: "Note title to remove",
            demandOption: true,
            type: "string"
        },
    },
    handler(argv) {
        removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: "Note tite",
            demandOption: true,
            type: "string"
        },
    },
    handler(argv) {
        readNote(argv.title)
    }
})

yargs.parse()