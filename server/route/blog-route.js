const express = require("express");
const blogRouter = express.Router();

const {
  fetchListOfBlogs,
  deleteABlog,
  addNewBlog,
  updateABlog,
} = require("../controller/blog-controller");

blogRouter.get("/", fetchListOfBlogs);
blogRouter.post("/add", addNewBlog);
blogRouter.put("/update/:id", updateABlog);
blogRouter.delete("/delete/:id", deleteABlog);


module.exports = blogRouter;