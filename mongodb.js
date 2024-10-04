
const express = require('express')
const mongoose =require('mongoose')

const app = express()
mongoose.connect("mongodb://127.0.0.1:27017/test")

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String
})

const UserModel= mongoose.model("customer", UserSchema)

app.get("/getUsers", (req, res) => {
  UserModel.find({}).then(function(customer) {
      res.json(customer)
  }).catch(function(err) {
    console.log(err)
  })

})

app.listen(3002, () => {
  console.log("Server is running")
})
