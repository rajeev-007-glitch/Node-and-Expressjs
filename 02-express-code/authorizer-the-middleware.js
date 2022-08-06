const authorizer = (req, res, next) => {
    const {user} = req.query
    if(user === 'ram'){
        req.user = {'name': 'Ram', 'id': 2}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorizer