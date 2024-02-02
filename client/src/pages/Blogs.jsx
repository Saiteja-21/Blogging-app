
import React,{useEffect,useState} from 'react'
import Button from '@mui/material/Button'; 
import BlogCard from '../components/BlogCard';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Blogs = () => { 
    const [blogs,setblogs]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{ 
        const getmethod=async()=>{
            const respone=await fetch('http://localhost:8000/blog/get');
        const data=await respone.json();
        setblogs(data)
        console.log(data)


        }
        getmethod()
        

    },[])

    
  return (
    <div>
        
        <Navbar props={true}/>
        <div>
            <input type='text' style={{width:'600px',height:"36px",borderRadius:'10px',fontWeight:'bold'}} placeholder='search for blogs'></input>
        </div> 
        <div style={{display:'flex',gap:'36px',marginTop:'48px'}}>
            <div style={{borderRight:'2px solid white',paddingRight:'2%'}}>
                <h4 onClick={()=>navigate('/newblog')} style={{cursor:'pointer'}}>create your blog</h4>
                <h4 onClick={()=>navigate('/blogs')} style={{cursor:'pointer'}}>view all blogs</h4>

                <h4 onClick={()=>navigate('/myblogs')} style={{cursor:'pointer'}}>view your blogs</h4>


            </div>
            <div>
  {blogs.length > 0 ? (
    blogs.map((blog) => (
      <BlogCard key={blog._id} name={blog.writer_name} title={blog.title} description={blog.description}  bool={true}/>
    ))
  ) : (
    <p>No blogs found.</p>
  )}
</div>


        </div>
         
      
      
    </div>
  )
}

export default Blogs
