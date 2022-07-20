const { readFile, writeFile } = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async ()=>{
    try {
        const first = await readFile('./Content/first.txt', 'utf8')
        const second = await readFile('./Content/second.txt', 'utf8')
        const third = await writeFile('./Content/result-writeFilePromise.txt', `Awww I am the result glad to be here I am so much amazed that I got this chance, ${first}, ${second}`, {flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error)        
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {   
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//                 return
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./Content/first.txt').then((result) => console.log(result) ).catch((error) =>  console.log(error) )