import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

function App() {
  // function:: handler function for blog to add bookmark
  const handleAddToBookmark = (blog) => {
    console.log("bookmark is coming soon");
  };

  return (
    <>
      {/* header section  */}
      <Header></Header>

      {/* main section  */}
      <main className="w-4/5 mx-auto md:flex gap-6">
        {/* blog component  */}
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>

        {/* bookmark component  */}
        <Bookmark></Bookmark>
      </main>
    </>
  );
}

export default App;
