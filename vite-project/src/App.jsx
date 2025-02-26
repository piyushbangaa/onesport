import Herosection from "./components/herosection";
import Navbar from "./components/navbar";
import Workflow from "./components/workflow";

function App() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Herosection/>
    <Workflow/>
    </div>
    </>
  );
}

export default App;
