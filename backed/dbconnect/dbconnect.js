import mongoose from 'mongoose';
// const url = 'mongodb+srv://princepatel7601:mxoqE1FVkUfeBFx9@users.r8qcr.mongodb.net/?retryWrites=true&w=majority&appName=users'
// const URL = process.env.BD_LINK;
// import dotenv from 'dotenv';
// dotenv.config();
// const url = process.env.url;
// const url='mongodb+srv://princepatel7601:mxoqE1FVkUfeBFx9@users.r8qcr.mongodb.net/?retryWrites=true&w=majority&appName=users'
//mongodb+srv://princepatel7601:<password>@users.r8qcr.mongodb.net/?retryWrites=true&w=majority&appName=users
const dbcon = async () =>{
  try {
    // await mongoose.connect(url,{
    //   useNewUrlParser:true,
    //   useCreateIndex:true,
    //   useUnifiedTopology:true,
    //   useFindAndModify:false
    // })
    await mongoose.connect('mongodb+srv://princepatel7601:mxoqE1FVkUfeBFx9@users.r8qcr.mongodb.net/?retryWrites=true&w=majority&appName=users')
    console.log("DB connected bbbb");

  } catch (error) {
    console.log(error);
    console.log("DB is not connect")
  }

}

export default  dbcon 