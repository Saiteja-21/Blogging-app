import mongoose from "mongoose"; 


const blogSchema=mongoose.Schema({
    writer_name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})


export default mongoose.model('blog',blogSchema)