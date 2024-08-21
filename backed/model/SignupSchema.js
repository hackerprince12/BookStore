import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Signupmodel = mongoose.model("users", SignupSchema);

export default Signupmodel;
