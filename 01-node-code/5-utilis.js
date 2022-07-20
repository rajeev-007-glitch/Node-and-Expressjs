const names = require('./4-names')

const greet = (name) =>{
    console.log(`Hello there ${name} and greeting from ${names.me} !`)
}

module.exports = greet