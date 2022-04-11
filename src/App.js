import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QuienesSomos from "./components/QuienesSomos";
import Acompañamiento from "./components/Acompañamiento";
import Filosofia from "./components/Filosofia";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Acompañamiento />
      <QuienesSomos />
      <Filosofia />
      <Contact />
    </div>
  );
}

export default App;
