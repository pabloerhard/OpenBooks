const mongoose = require('mongoose')
const express = require('express');
const app = express();
const routesUrls = require('./routes/routes')
const routesBooks = require('./routes/routesBooks')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect('mongodb+srv://pabloerhard02:mongo02@testcluster.61ydvft.mongodb.net/Node-API?retryWrites=true&w=majority')
  .then(()=>{
    console.log('connected to MongoDB')
  }).catch((error)=>{
  console.log(error)
})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.use('/book', routesBooks)

app.listen(4000, ()=>{
  console.log('Node API app is running on port 4000')
})
