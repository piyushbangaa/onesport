import Footer from "./components/Footer";
import Herosection from "./components/herosection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Workflow from "./components/workflow";

function App() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Herosection/>
    <div className="border-t border-gray-600 mt-40"></div>
    <Workflow/>
    <div className="border-t border-gray-600 my-10"></div>
    <Pricing/>
    <div className="border-t border-gray-600 my-10"></div>
    <Footer/>
    </div>
    </>
  );
}

export default App;
