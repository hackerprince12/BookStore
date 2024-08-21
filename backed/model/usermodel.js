import mongoose, { Types } from 'mongoose';

const userSchema = new mongoose.Schema({
  Book_name:{
    type:String,
    require:true,
  },
  Book_title:{
    type:String,
    require:true,
  },
  Book_price:{
    type:Number,
    require:true,
  },

  Book_Url:{
    type:String,
    require:true,
  },
  rate:{
    type:Number,
    require:true,
  }
},{timestamps:true});
const Usermodel = mongoose.model("books",userSchema);
export default Usermodel;