import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QuienesSomos from "./components/QuienesSomos";
import Acompañamiento from "./components/Acompañamiento";
import Filosofia from "./components/Filosofia";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Acompañamiento/>
      <QuienesSomos/>
      <Filosofia/>
    </div>
  );
}

export default App;
