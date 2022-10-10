const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: [true, "please provide a name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: string,
    required: [true, "please provide a email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please provide a valid email",
    ],
    unique:true
  },
  password: {
    type: string,
    required: [true, "please provide a password"],
    minlength: 6,
    maxlength: 12,
  },
})

module.exports = mongoose.model('User', userSchema)