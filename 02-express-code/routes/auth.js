const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(401).send('Please provide some credentials...')
})

module.exports = router