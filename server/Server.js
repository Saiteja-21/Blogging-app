import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import getRouter from './routes/Blog.js'



const connectToDatabase=async()=>{
    return await mongoose.connect('mongodb+srv://saiteja:abc12@cluster0.rlojc0p.mongodb.net/bloggingapp')
    

}

const app=express();
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('welcome')
})

app.use('/blog',getRouter)
app.listen(8000,async()=>{
    await connectToDatabase()
    console.log('started')
 })