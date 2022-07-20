const { secureHeapUsed } = require('crypto')
const { readFile, writeFile } = require('fs')

readFile('./Content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./Content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './Content/result-async.txt',
            `Hello meenasan this is the result of writeLine function : ${first}, ${second}`,
             { flag: 'a' }, 
            (err, result) => {
             if (err) {
                console.log(err)
                return
              }
            console.log(result)
        })
    })
})