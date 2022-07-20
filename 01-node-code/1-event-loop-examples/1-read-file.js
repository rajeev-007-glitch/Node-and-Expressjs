const { readFile } = require('fs')

console.log('Performing first task. ')

readFile('../Content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task. ')
})

console.log('Ready for next task. ')