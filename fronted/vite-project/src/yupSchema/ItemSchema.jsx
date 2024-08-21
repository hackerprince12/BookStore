import * as Yup from 'yup';

export const ItemSchema=Yup.object({
  Book_name:Yup.string().min(2).max(25).required("Please enter book name!"),
  Book_title:Yup.string().min(4).max(40).required("please enter title! "),
   rate:Yup.number().min(0).max(1).required("only 0 or 1 valid")
})

