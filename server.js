const express = require("express")
const booksRoutes = require("./routes/books")
const { default: mongoose } = require("mongoose")
const mongoose = require("mongoose")
const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.urlencoded())
const DB_CONNECTION_STRING  = "mongodb+srv://nanamiwaku:7eBvDaG4NRP86SRD@cluster0.bzf8vmp.mongodb.net/F2023_COMP3123?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_STRING,{
    useNewUrlparser:true,
    useUnifiedTopology: true,

})

app.use("/library", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})