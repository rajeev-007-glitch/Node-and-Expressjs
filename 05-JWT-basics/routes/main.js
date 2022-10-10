const express = require("express")
const router = express.Router()

const { login, dashboard } = require("../controllers/main")

const authenticator = require('../middleware/auth')

router.route("/dashboard").get(authenticator, dashboard)
router.route("/login").post(login)

module.exports = router
    