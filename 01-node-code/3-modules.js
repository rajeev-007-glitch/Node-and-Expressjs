// commonjs - every file is a module by default
// Modules - Encapsulated code (only share minimum)

// const me  = "Rajeev"
// const harry = "Harry"
// const satan = "Satan"

// const greet = (name) =>{
//     console.log(`Hello there ${name} and greeting from ${me} !`)
// }

const names = require('./4-names')
const greet = require('./5-utilis')
const data = require('./6-exporting')
require('./7-exporting-without-exports')
console.log(data);

greet(`Sejal`);
greet(names.me);
greet(names.harry);
greet(names.satan);