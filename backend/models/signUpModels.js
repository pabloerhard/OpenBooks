const mongoose = require('mongoose')


const signUpTemplate = new mongoose.Schema({
  fullname:{type:String, required:true},
  username:{type:String, required:true,unique:true},
  email:{type:String,required:true,unique: true},
  password:{type:String,required:true},
  book:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'BookModel',}]
},
  {
  timestamps:true
}
)

const SignUp = mongoose.model('SignUp',signUpTemplate)
SignUp.createIndexes();

module.exports = SignUp