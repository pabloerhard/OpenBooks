const express = require('express')
const router = express.Router()
const BookModel = require('../models/bookModel')

router.post('/addbook', async(req,res)=>{
  try{
    //console.log(req.body.bookId)
    //const existingBook = await BookModel.findOne({bookId:req.body.bookId});
    const findBook = await BookModel.findOne({bookId:req.body.bookId})
    if (findBook) {
      return res.status(400).json({ message: 'Book already exists' });
    }
    const bookAdd = await BookModel.create(req.body)
    return res.status(200).json(bookAdd);

  }catch (e) {
    console.log(e.message)
    res.status(500).json({message: e.message})
  }
})
  .post('/viewbooks',async(req,res)=>{
    try{
      const objectId = req.body._id
      const book = await BookModel.findById(objectId)
      res.status(200).json({book})
    }catch (e) {
      console.log(e.message)
      res.status(500).json({message: e.message})
    }

  })
module.exports = router