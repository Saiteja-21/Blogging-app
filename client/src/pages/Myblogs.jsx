import React ,{useEffect,useState} from 'react'
import BlogCard from '../components/BlogCard'
import Button from '@mui/material/Button';   
import Navbar from '../components/Navbar';

const Myblogs = () => { 
    const [blogs,setblogs]=useState([])
    useEffect(()=>{ 
        const getmethod=async()=>{ 
            const name=localStorage.getItem('name')
            const respone=await fetch(`https://blogging-app-1z4m.onrender.com/blog/${name}`);
        const data=await respone.json();
        setblogs(data)
        console.log(data)


        }
        getmethod()
        

    },[])
  return (
    <div>
          
          <Navbar props={true}/>
         <div style={{display:'flex',gap:'36px',marginTop:'48px'}}>
            <div style={{borderRight:'2px solid white',paddingRight:'2%'}}>
                <h4 onClick={()=>navigate('/newblog')} style={{cursor:'pointer'}}>create your blog</h4>
                <h4 onClick={()=>navigate('/blogs')} style={{cursor:'pointer'}}>view all blogs</h4>

                <h4 onClick={()=>navigate('/myblogs')} style={{cursor:'pointer'}}>view your blogs</h4>


            </div>
            <div>
  {blogs.length > 0 ? (
    blogs.map((blog) => (
      <BlogCard key={blog._id} name={blog.writer_name} title={blog.title} description={blog.description}  bool={false}/>
    ))
  ) : (
    <p>No blogs found.</p>
  )}
</div>

        </div>

        
      
      
    </div>
  )
}

export default Myblogs
