const mongoose = require('mongoose')
const bookschmea = new mongoose.Schema({
title: String,
author:{
  type:{
    required: true,
    lowercase: true,
  }
},
price: Number,
published_date:Date

})

moduke.exports = mongoose.model("book",bookSchmea)