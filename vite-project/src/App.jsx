import Herosection from "./components/herosection";
import Navbar from "./components/navbar";
import Feature from "./components/feature";

function App() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Herosection/>
    <Feature/>
    </div>
    </>
  );
}

export default App;
