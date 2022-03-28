import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Stories from "./pages/Stories";
import Action from "./pages/Action";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Home />
        <About />
        <Stories />
        <Action />
      </div>
      <Footer />
    </div>
  );
}

export default App;
