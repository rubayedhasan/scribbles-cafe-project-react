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
    <>
      <h1>Blogs</h1>
    </>
  );
};

export default Blogs;
