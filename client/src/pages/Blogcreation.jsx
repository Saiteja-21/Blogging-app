import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import Navbar from '../components/Navbar'; 
import { useNavigate } from 'react-router-dom';


const Blogcreation = () => {
  const [title,settitle]=useState('')
  const [description,setdescription]=useState('')
    const navigate=useNavigate()

    const handlesubmit=async()=>{
      let name=localStorage.getItem('name')
      const obj={
        writer_name:name,
        title:title,
        description:description
      }
      const response=await fetch('http://localhost:8000/blog/post',{
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const data=await response.json();
      
    }

  return (
    <div>
       
        <Navbar props={true}/>
    
       

        <div style={{display:'flex',gap:'196px',marginTop:'48px'}}>
            <div style={{borderRight:'2px solid white',paddingRight:'2%'}}>
                <h4 onClick={()=>navigate('/newblog')} style={{cursor:'pointer'}}>create your blog</h4>
                <h4 onClick={()=>navigate('/blogs')} style={{cursor:'pointer'}}>view all blogs</h4>

                <h4 onClick={()=>navigate('/myblogs')} style={{cursor:'pointer'}}>view your blogs</h4>


            </div>
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
        <div style={{backgroundColor:'white',width:'600px',borderRadius:'10px',height:'300px',display:'flex',flexDirection:'column',justifyContent:'center',padding:'2%',gap:'20px'}}>
            <h2 style={{color:'red'}}>Enter your blog details</h2>
        <TextField id="standard-basic" label="blog-title" variant="standard" onChange={(e)=>settitle(e.target.value)} /> 
        
        <textarea name="" id="" cols="30" rows="10" placeholder='description' onChange={(e)=>setdescription(e.target.value)}></textarea>
          <Button variant="contained" style={{height:'36px',backgroundColor:'#398388'}} onClick={()=>handlesubmit()}>submit  </Button>


        </div>
      

        </div>
           
        </div>
       
    </div>
  )
}

export default Blogcreation
