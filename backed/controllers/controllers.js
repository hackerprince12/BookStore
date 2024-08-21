// import Signupmodel from "../model/SignupSchema.js";
import Usermodel from "../model/usermodel.js";
import Signupmodel from "../model/SignupSchema.js";

const get = async (req, res) => {
  try {
    const users = await Usermodel.find();
    if (!users) {
      res.status(404).json({ success: false, message: "user not found" });
    }
    res.status(200).json(users);
  } catch (error) {
    console.lig(error);
    res
      .status(500)
      .json({ success: false, message: "enternal server problem" });
  }
};

const create = async (req, res) => {
  try {
    const { Book_name, Book_title, Book_price, Book_Url, rate } = req.body;
    const newUsers = new Usermodel({
      Book_name,
      Book_title,
      Book_price,
      Book_Url,
      rate,
    });
    await newUsers.save();
    res.status(200).json({ success: true, message: "user create successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, messsage: "server error" });
  }
};

//sign users

const signupuser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await Signupmodel.findOne({ email: email });
    if (user) {
      return res.json({ messsage: "user already exit!!" });
    }
    if (!user) {
      const newUsers = new Signupmodel({
        name,
        email,
        password,
      });
      // await newUsers.save();
      await Signupmodel.insertMany([newUsers]);
      res
        .status(200)
        .json({ success: true, message: "user signup successfull" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, messsage: "server error" });
  }
};

//login user

const login = async (req, res) => {
  const { email, password } = req.body;
  const users = await Signupmodel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({
          message: "successfull",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
        });
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("incorrect email or password");
    }
  });
  // try {
  //   const users= await Signupmodel.findOne({email:email});
  //   const isMatch= compare(password,Signupmodel.password);
  //   if(!users || !isMatch){
  //     return res.status(400).json({messsage:"invalid user or password!"});
  //   }
  //   else{
  //     res.status(200).json({success:true,message:"user login successfull",users:{
  //       _id: users._id,
  //       name:users.name,
  //       email:users.email,
  //     },});
  //   }

  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({success:false,messsage:"server error"});

  // }
};

const Delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await Usermodel.findByIdAndDelete(id);
    if (!deleteUser) {
      return res
        .status(404)
        .json({ success: false, message: "server  not found error" });
    }
    res.status(200).json({ success: true, message: "user delete successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export { get, create, Delete, signupuser, login };
