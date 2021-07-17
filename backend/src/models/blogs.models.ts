import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    blogHeading: {
        type: String
    },
    isPublished: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;