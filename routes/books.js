const express = require("express")
const bookModel = require('../models/Books')
const routes = express.Router()

//Get All Books
//http://localhost:3001/library/books
routes.get("/books", async (req, res) => {
    try{
        const bookList = await BookModel.find({})
            res.status(200).send(bookLsit)
    
        }catch(error){
            res.status(500).send(error)
        }    
    //res.send({message: "Get All Books"})
})

//Add NEW Book
routes.post("/books",async (req, res) => {
    console.log()
      try{
     const newBook = new BookModel({
        ...req.body
     }) 
     await newBook.save()
     BookModel.create({})
     res.sratus(200).send(newBook)
      } catch(error){
        res.status(500).send(error)

      } 


    //res.send({message: "Add NEW Book"})

})

//Update existing Book By Id
routes.post("/book/:bookid", (req, res) => {
    res.send({message: "Update existing Book By Id"})
})

//Delete Book By ID
routes.delete("/book/:bookid", (req, res) => {
    res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes