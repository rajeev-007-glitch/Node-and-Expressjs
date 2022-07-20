const { createReadStream } = require('fs')

const stream = createReadStream('./Content/big.txt', { highWaterMark: 90000 })


//! Default buffer 64kb
//! last buffer - remainder
//! highWaterMark - Control Size
//! const stream = createReadStream('./Content/big.txt', { highWaterMark: 90000 })
//! const stream = createReadStream('./Content/big.txt', { encoding: 'utf8' })


stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err)=>console.log(err))