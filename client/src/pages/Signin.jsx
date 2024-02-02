import React from 'react'
import Button from '@mui/material/Button';  
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import {auth,provider} from "../Firebase"
import {signInWithPopup} from 'firebase/auth'
 


const Signin = () => {

    const navigate =useNavigate();
    const signupwithgoogle=()=>{ 
        console.log('firebase')
        signInWithPopup(auth,provider).then((result)=>{ 
            localStorage.setItem('name',result.user.displayName)
    
        }).catch((error)=>console.log(error))

        navigate('/blogs')
    
    }
  return (
    <>
       
        <Navbar props={false}/>
        <div style={{display:'flex',justifyContent:'space-around',marginTop:'58px'}}>
            <div style={{height:'390px',width:'500px',borderRadius:'10px',backgroundColor:'yellow',display:'flex',flexDirection:'column',justifyContent:'center',color:'red'}}>
                <h1>About App</h1>
                <h3> our app has blogs posted by people,you can read the blogs or create your own blogs. you can create your account and enjoy reading!</h3>
                <Button variant="contained" style={{height:'36px',backgroundColor:'#398388',marginTop:"60px"}} onClick={()=>signupwithgoogle()}>Sign In</Button>
            

            </div>

            <div style={{height:'390px',width:'500px',borderRadius:'10px'}}>
                <img src='./images.jpg' alt='no' style={{height:'390px',width:'500px',borderRadius:'10px'}}/>
                
            </div>
    

        </div>


      
    </>
  )
}

export default Signin
