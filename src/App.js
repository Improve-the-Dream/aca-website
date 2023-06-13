import { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Stories from "./pages/Stories";
import Action from "./pages/Action";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const storiesRef = useRef(null);
  const actionRef = useRef(null);

  return (
    <div className="App">
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        storiesRef={storiesRef}
        actionRef={actionRef}
      />
      <div className="pages">
        <Home refs={homeRef} actionRef={actionRef} />
        <About refs={aboutRef} />
        <Stories refs={storiesRef} />
        <Action refs={actionRef} />
      </div>
      <Footer homeRef={homeRef} />
    </div>
  );
}

export default App;
