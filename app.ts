import express from 'express';
import itemController from './controllers/itemController'


const app = express()
// mongoose.connect('', {});


app.use(express.json())

app.use('/items', itemController);


app.get('/',(req:any,res:any) => {
    res.send('hello zenss dave')
})


const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log('listening on port')
})