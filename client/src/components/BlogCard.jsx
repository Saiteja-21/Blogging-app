import Button from '@mui/material/Button'; 
import React from 'react'
import { useNavigate } from 'react-router-dom';


const BlogCard = ({name,title,description,bool}) => { 
    
    const navigate=useNavigate()
  return (
    <div style={{backgroundColor:'white',color:'black',borderRadius:'10px'}}>
      <h3>{name}</h3>
        <h3>{title}</h3> 
     <p>{description}</p>
        {bool &&  <Button variant="contained" style={{height:'36px',backgroundColor:'#398388'}} onClick={()=>navigate('/newblog')}>edit</Button>

        }
        
       
      
    </div>
  )
}

export default BlogCard
