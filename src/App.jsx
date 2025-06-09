import { Comments } from "./components/comments";
import { Navbar } from "./components/nav";
import { Posts } from "./components/posts";

function App() {
  return (
    <>
      <Navbar />
      <Posts />
      <Comments />
    </>
  );
}

export default App;
