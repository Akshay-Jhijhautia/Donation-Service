import 'express-async-errors';
import mongoose from 'mongoose';
import express from 'express';
require('dotenv').config();
const app = express();

import userRoutes from './src/routes/users';
import error from './middleware/error';

app.use(express.json());
app.use('/api/users',userRoutes);
app.use(error); 

app.get('/',(req,res)=>{
    res.send("Healthy"); 
});

mongoose.connect('mongodb://localhost/donation')
  .then(()=>console.log("Connected to mongodb"))
  .catch((err) => console.log("Could not connect to mongodb", err));


const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});