const jwt = require("jsonwebtoken")
const {BadRequestError} = require("../errors")

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new BadRequestError("Please provide user name and password.")
  }

  const id = new Date().getDate()

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  })

  // console.log(username, password)
  res.status(200).json({ msg: " User Created.", token })
  // res.staus(201).json({username, password})
}

const dashboard = async (req, res) => {
  console.log(req.user)
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `Hello my boi ${req.user.username} you got a nice name there...`,
    secret: `Your luckyNumber is ${luckyNumber}.`,
  })
}

module.exports = {
  login,
  dashboard,
}
