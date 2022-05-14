const fs = require('fs')

const buffer = fs.readFileSync('./1-json.json')
const person = JSON.parse(buffer.toString())

person.name = "Robin"
person.age = "21"

fs.writeFileSync('./1-json.json', JSON.stringify(person))