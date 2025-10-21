import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      {/* header section  */}
      <Header></Header>

      {/* main section  */}
      <main className="w-4/5 mx-auto flex gap-6">
        {/* blog component  */}
        <Blogs></Blogs>

        {/* bookmark component  */}
        <Bookmark></Bookmark>
      </main>
    </>
  );
}

export default App;
