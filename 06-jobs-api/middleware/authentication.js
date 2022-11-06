const User = require("../models/User")
const JWT = require("jsonwebtoken")
const { UnauthenticatedError } = require("../errors")

const auth = async (req, res, next) => {
  const authHeaders = req.headers.authorization
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication Invalid")
  }
  const token = authHeaders.split(" ")[1]

  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET)
    req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid")
  }
}

module.exports = auth
