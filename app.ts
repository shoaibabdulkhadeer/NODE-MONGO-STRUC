import express from 'express';
import mongoose from 'mongoose';
import itemController from './controllers/itemController'
import dotenv from 'dotenv';

dotenv.config(); 

const app = express()

const { PORT, MONGODB_URI } = process.env;



mongoose.connect(`${MONGODB_URI}`)
    .then(() => console.log(" mongodb   Connection established"))
    .catch((err:any) => console.log(err))

app.use(express.json())

app.use('/items', itemController);

app.get('/',(req,res) => {
    res.send("working")
})

const port = PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
});

