import React from 'react'
import Button from '@mui/material/Button'; 
import {auth,provider} from '../Firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
 


const Navbar = (props) => {
  const  navigate=useNavigate()

  const handlelogout=()=>{
    localStorage.setItem('name','');
    navigate('/')
  }
  const signupwithgoogle=()=>{
    console.log('firebase')
    signInWithPopup(auth,provider).then((result)=>{ 
        localStorage.setItem('name',result.user.displayName)

    }).catch((error)=>console.log(error))
    navigate('/blogs')

    

}
  const name=localStorage.getItem('name')

  return (
    <div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <h1 style={{justifyContent:'flex-start'}}>Blogging App</h1>
        {
           !props.props &&  <Button variant="contained" style={{height:'36px',backgroundColor:'#398388'}}   onClick={()=>signupwithgoogle()}>Sign In</Button>
        }
       {
        props.props &&  <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <Button variant="contained" style={{height:'36px',backgroundColor:'#398388'}} onClick={()=>handlelogout()}>Logout</Button>
        <h2 style={{color:'#398388',marginLeft:'12px'}}>welcome {name}!</h2>

        </div>
       }

       
      
            

        </div> 
      
    </div>
  )
}

export default Navbar
