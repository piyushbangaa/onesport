import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Herosection from "./components/herosection";
import Pricing from "./components/Pricing";
import Workflow from "./components/workflow";
import SignIn from "./pages/SignIn"; // Import your SignIn page
import Createaccount from "./pages/createaccount";

function Home() {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Herosection />
      <div className="border-t border-2 border-[#1e1e1e] mt-40"></div>
      <Workflow />
      <div className="border-t border-2 border-[#1e1e1e] my-10"></div>
      <Pricing />
      <div className="border-t border-2 border-[#1e1e1e] my-10"></div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/createaccount" element={<Createaccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
