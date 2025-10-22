import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      {/* time table  */}
      <div>
        <p>Spent time on read : 177 min</p>
      </div>

      {/* bookmarked blogs container  */}
      <div className="p-8 bg-[#1111110D] mt-6 rounded-lg min-h-40">
        <h4 className="font-bold text-2xl text-[#111111] mb-4">
          Bookmarked Blogs: {bookmarks.length}
        </h4>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
