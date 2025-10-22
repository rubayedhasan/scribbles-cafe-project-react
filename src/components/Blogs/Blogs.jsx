import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  //   use effect to fetch data
  useEffect(() => {
    fetch("blogs-data.json")
      .then((blogsRes) => blogsRes.json())
      .then((blogsData) => setBlogs(blogsData));
  }, []);

  return (
    <div className="w-2/3">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
