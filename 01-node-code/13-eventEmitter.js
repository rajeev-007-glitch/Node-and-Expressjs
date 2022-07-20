const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`Data recieved from ${name} with id: ${id}`)
}) 

customEmitter.on('response', ()=>{
    console.log('Some other logic here')
})

customEmitter.emit('response', 'chaman', 98)


// 1. Events can only be emitted after listening