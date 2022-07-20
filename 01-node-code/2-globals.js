// GLOBALS - NO WINDOW !!!

// __dirname - path of current directory
// __filename - filename of current file
// require - function to use module (commonjs)
// module - info about current module
// process - info about the environment where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

setInterval(()=>{
    console.log(`Hello world!`)
}, 1000);