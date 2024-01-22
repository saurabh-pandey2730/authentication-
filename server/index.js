const express = require("express")
const mongoose =require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://saurabh:shaurya2@cluster0.kcddein.mongodb.net/?retryWrites=true&w=majority')
.then(console.log("connected"))
app.post('/register', (req, res)=>{
EmployeeModel.create(req.body)
.then(employee => res.json(employee))
.catch(err => res.json(err)) 

})

app.listen(3001,()=>{
    console.log("server is running")
})
