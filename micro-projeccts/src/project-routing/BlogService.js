const data = [
    { id: 1, title: "Article1", desc: "Desc 1", content: "Some Content for 1" },
    { id: 2, title: "Article2", desc: "Desc 2", content: "Some Content for 2" },
    { id: 3, title: "Article3", desc: "Desc 3", content: "Some Content for 3" },
    { id: 4, title: "Article4", desc: "Desc 4", content: "Some Content for 4" },
]
const BlogService = {
    getBlogs: () => Promise.resolve(data),
    getBlogPost: (blogId) => {
        const requestedBlogPost = data.find(blogPost => blogPost.id === blogId);
        if (requestedBlogPost) {
            return Promise.resolve(requestedBlogPost);
        }
        else {
            return Promise.reject("blog not found")
        }
    }
}


export default BlogService