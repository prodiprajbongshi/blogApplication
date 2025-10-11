import express from "express";
import {
  addBlog,
  addComment,
  deleteBlog,
  ganerateContent,
  getAllBlogs,
  getBlogComments,
  getSingleBlog,
  togglePublish,
} from "../controllers/BlogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), auth, addBlog);
blogRouter.get("/allblogs", getAllBlogs);
blogRouter.get("/:id", getSingleBlog);
blogRouter.post("/delete", auth, deleteBlog);
blogRouter.post("/toggle-publish", auth, togglePublish);
blogRouter.post("/addcomment", addComment);
blogRouter.post("/getcomment", getBlogComments);
blogRouter.post("/generate", auth, ganerateContent);

export default blogRouter;
