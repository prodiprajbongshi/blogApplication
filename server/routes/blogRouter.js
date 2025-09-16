import express from 'express'
import { addBlog, getAllBlogs  } from '../controllers/BlogController.js'
import upload from '../middleware/multer.js'
import auth from '../middleware/auth.js'

const blogRouter = express.Router()

blogRouter.post("/add", upload.single("image"), auth, addBlog)
blogRouter.get("/allblogs", getAllBlogs)

export default blogRouter;
