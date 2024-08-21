import express from 'express'


import { get,create,Delete,signupuser,login} from '../controllers/controllers.js';
const routes = express.Router();

routes.get("/get",get);//get books data
routes.post("/create",create);//massege
routes.post("/signup",signupuser);
routes.post("/login",login);
routes.delete("/delete/:id",Delete);

export default routes