import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  // destructuring the blog object
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-10 border-b border-[#1111111A] rounded-xs pb-9">
      {/* blog's cover picture  */}
      <figure className="flex justify-center items-center">
        <img
          src={cover}
          alt={`Cover Picture of Title ${title}`}
          className="w-full object-contain rounded-lg"
        />
      </figure>

      {/* parent:: blog author info*/}
      <div className="mt-8 flex justify-between items-center">
        {/* child:: author details  */}
        <div className="flex gap-5 items-center">
          {/* author picture  */}
          <figure className="w-16 h-16">
            <img
              src={author_img}
              alt={author}
              className="w-full object-contain"
            />
          </figure>

          {/* author info */}
          <div>
            <h6 className="font-bold text-[#111111] text-2xl">{author}</h6>
            <p className="font-semibold text-base text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>

        {/* child:: read & bookmark  */}
        <div className="flex gap-3 justify-center items-center">
          <p className="text-xl text-[#11111199] font-medium">
            {reading_time} min read
          </p>

          {/* bookmark button  */}
          <button
            onClick={handleAddToBookmark}
            className="text-2xl cursor-pointer hover:text-rose-500"
            type="button"
          >
            <FaRegBookmark />
          </button>
        </div>
      </div>

      {/* blog title */}
      <h3 className="my-4 text-4xl text-[#111111] font-bold lg:w-4/5">
        {title}
      </h3>

      {/* hashtags */}
      <p>
        {hashtags.map((hash, idx) => (
          <span
            key={idx}
            className="mr-3 hover:underline hover:text-rose-300 font-medium text-xl text-[#11111199]"
          >
            <a href="">{hash}</a>
          </span>
        ))}
      </p>

      {/* read mark  */}
      <p className="font-semibold text-xl text-[#6047EC] mt-5 underline">
        <a href="">Mark as read</a>
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
