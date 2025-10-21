import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  //   use effect to fetch data
  useEffect(() => {
    fetch("blogs-data.json")
      .then((blogsRes) => blogsRes.json())
      .then((blogsData) => console.log(blogsData));
  }, []);

  return (
    <div className="w-2/3 border">
      <h1>Blogs</h1>
    </div>
  );
};

export default Blogs;
