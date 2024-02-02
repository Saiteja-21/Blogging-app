import express from 'express'
import { getallblogs,getbyname,postblog } from '../controllers/Blog.js'


const router=express.Router()

router.get('/get',getallblogs)
router.get('/:name',getbyname) 
router.post('/post',postblog) 


export default router