const notFound = (req, res)=>{
    res.status(404).send("Routes not found please try another route which is correct...")
}

module.exports = notFound