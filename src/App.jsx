import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      {/* header component  */}
      <Header></Header>

      {/* blog component  */}
      <Blogs></Blogs>
    </>
  );
}

export default App;
