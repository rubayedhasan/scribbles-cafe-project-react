import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  // function:: handler function for blog to add bookmark
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      {/* header section  */}
      <Header></Header>

      {/* main section  */}
      <main className="w-11/12 md:w-4/5 mx-auto md:flex gap-6">
        {/* blog component  */}
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>

        {/* bookmark component  */}
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
