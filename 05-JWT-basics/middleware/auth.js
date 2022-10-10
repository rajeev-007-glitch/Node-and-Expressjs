const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')
const authenticator = async (req, res, next)=>{
    const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Invalid token syntax')
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const {id, username} = decoded
    req.user = {id, username}
    next()
  } catch (error) {
    throw new UnauthenticatedError('Unauthorized to access this route')
  }
}

module.exports = authenticator