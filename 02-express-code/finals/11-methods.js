const express = require('express')
const app = express()
const { people } = require('./data')

// Static assets
app.use(express.static('./methods-public'))

// Parse Form data
app.use(express.urlencoded({ extended: false }))


// Parse json
app.use(express.json())


app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: "Please provide name value..." })
    }
    res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
    console.log(req.body)
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(401).send('Please provide some credentials...')
})


app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    // console.log(id, name)

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({ success: false, data: `Can't find person with id ${id}` })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })


})

app.delete('/api/people/:id', (req, res)=>{
    const {id} = req.params

    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res.status(404).json({success: false, msg: `no person with id ${id}`})
    }

    const newPeople = people.filter((person)=> person.id !== Number(id))
    res.status(200).json({success: true, data: newPeople})
})

app.listen(5000, () => {
    console.log('App is listening at port 5000...')
})