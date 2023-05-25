const mongoose = require('mongoose')

const bookModel = new mongoose.Schema({
  bookId:{type:String},
  bookName:{type:String, required:true},
  bookAuthor:{type:String, required:true},
  bookImage:{type:String,required:true},
  numberPages:{type:Number,required:true},
  currentPage:{type:Number}
}
)

const BookModel = mongoose.model('BookModel',bookModel)
BookModel.createIndexes()

module.exports = BookModel