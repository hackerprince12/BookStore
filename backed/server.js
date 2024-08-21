import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from './routes/routes.js';
import dbcon from './dbconnect/dbconnect.js'

const port = process.env.PORT || 3001;

const app = express();
dotenv.config();

app.use(express.json())
app.use(cors());

dbcon();

app.get("/",(req,res)=>{
  res.send("Server is nunning");
})
app.use('/api',routes);

app.listen(port,()=>{
  console.log(`server is running on port no ${port}`);
})