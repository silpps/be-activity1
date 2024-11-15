const Blog = require('../models/blogModel');

//GET /blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({}).sort({createdAt: -1});
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//POST /blogs
const createBlog = async (req, res) => {
    try{
        const blog = await Blog.create({ ...req.body});
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//GET /blogs/:blogId
const getBlogById = async (req, res) => {
        const {blogId} = req.params;
        const blog = await Blog.findById(blogId);
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).json({message: "Blog not found"});
        }
};

//PUT /blogs/:blogId
const updateBlog = async (req, res) => {
    const {blogId} = req.params;
    const updatedBlog = await Blog.findOneAndUpdate(
        {_id: blogId},
        {...req.body},
        { new: true}
    );
    if (updatedBlog) {
        res.status(200).json(updatedBlog);
    } else {
        res.status(404).json({message: "Blog not found"});
    }
};

//DELETE /blogs/:blogId
const deleteBlog = async (req, res) => {
    const {blogId} = req.params;
    const deleteBlog = await Blog.findOneAndDelete({_id: blogId});
    if (deleteBlog) {
        res.status(200).json({ message: "Blog deleted successfully"});
    } else {
        res.status(404).json({message: "Blog not found"});
    }
};

module.exports = {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
}