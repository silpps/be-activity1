const express = require("express");
const router = express.Router();
const {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
} = require("../controllers/blogController");

//GET /blogs
router.get("/", getAllBlogs);

//POST /blogs
router.post("/", createBlog);

//GET /blogs/:blogId
router.get("/:blogId", getBlogById);

//PUT /blogs/:blogId
router.put("/:blogId", updateBlog);

//DELETE /blogs/:blogId
router.delete("/:blogId", deleteBlog);

module.exports = router;