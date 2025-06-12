import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Product";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
