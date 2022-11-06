const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name product"],
  },
  price: {
    type: Number,
    required: [true, "Please provide price of product"],
  },
  image: {
    type: String,
    required: [true, "Please provide the image to be uploaded"],
  },
})

module.exports = mongoose.model('Product', productSchema)