const express = require('express')
const router = express.Router()
const signUpTemplate = require('../models/signUpModels')
const BookModel = require('../models/bookModel')
const jwt = require("jsonwebtoken")
require('dotenv').config();
router.post('/user', async(req,res)=>{
  const { username, password } = req.body;
  try{
    const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
    const user = await signUpTemplate.findOne({ username, password });
    if(!user){
      return res.status(404).json({ message: 'User not found.' });
    }
    const token = jwt.sign({userId:user._id},JWT_SECRET)
    res.status(200).json({user,token})
  }catch (e) {
    console.log(e.message)
    res.status(500).json({message: e.message})
  }
})
  .post('/getId',async(req,res)=>{
    const {username,bookId} = req.body
    console.log(username)
    try{
      const book = await BookModel.findById(bookId)
      const user = await signUpTemplate.findOneAndUpdate({username:username},
        {$push:{book:book._id}}
      )
      if(!user){
        return res.status(404).json({ message: 'User not found.' });
      }
      if(!book){
        return res.status(404).json({ message: 'Book not found.' });
      }
      res.status(200).json({ bookId: book._id, userId: user._id });
    }catch (e) {
      console.log(e.message)
      res.status(500).json({message: e.message})
    }

  })
  .post('/getUserBooks',async(req,res)=>{
    try{
      const username = req.body.user
      const user = await signUpTemplate.findOne({username})
      if(!user){
        return res.status(404).json({ message: 'User not found.' });
      }
      res.status(200).json({books:user.book})
    }catch (e) {
      console.log(e.message)
      res.status(500).json({message: e.message})
    }
  })
router.post('/signup',async(req,res)=>{
  try {
    const signUp = await signUpTemplate.create(req.body)

    res.status(200).json(signUp);

  }catch (e) {
    console.log(e.message)
    res.status(500).json({message: e.message})
  }
})





  router.delete('/user/:id', async(req,res)=>{
    res.send('Hello API')
    try{
      const {id} = req.params
      const user = await signUpTemplate.findByIdAndDelete(id);
      if (!user){
        res.status(404).json({message: `can not find any product by id ${id}`})
      }
      res.status(200).json(user);
    }catch (e) {
      res.status(500).json({message: e.message})
    }
  })
module.exports = router