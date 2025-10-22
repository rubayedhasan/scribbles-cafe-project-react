import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-white p-5 mb-4 rounded-lg">
      <h4 className="font-semibold text-lg text-[#111111]">{bookmark.title}</h4>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
