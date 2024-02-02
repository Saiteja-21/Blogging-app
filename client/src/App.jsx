import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Blogs from './pages/Blogs'
import Blogcreation from './pages/Blogcreation'
import Myblogs from './pages/Myblogs'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/newblog' element={<Blogcreation/>}/>
      <Route path='/myblogs' element={<Myblogs    />}/>

    </Routes>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
