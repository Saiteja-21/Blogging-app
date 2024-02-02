import Blog from '../models/Blog.js'  


export const getallblogs=async(req,res)=>{
    const blogs= await Blog.find()
    res.json(blogs)

}

export const getbyname=async(req,res)=>{
    const name=req.params.name
    console.log(name)
    const blogs= await Blog.find({writer_name:name})
    res.json(blogs)

}

export const postblog=async(req,res)=>{
    const obj=req.body;
    const saved=Blog(obj)
    const saves2=await saved.save();
    res.json(saved)
   
}