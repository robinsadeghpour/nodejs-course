import _yargs from "yargs";
import {hideBin} from "yargs/helpers";

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
    handler: (argv) => {
        console.log("Title: ", argv.title)
        console.log("Body: ", argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => {
        console.log("Removing note!")
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        console.log("Listing out all notes")
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: () => {
        console.log("Reading a note")
    }
})

yargs.parse()