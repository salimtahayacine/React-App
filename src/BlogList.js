const BlogList = ({blogs, title , handDelete}) => {

    
    // const title = props.title;
    // const blogs = props.blogs;
    //console.log(props,blogs)
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>this blog is written by {blog.author}</p>
                    <button onClick={() => handDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;