// import "./App.css";

import Button from "./Components/Buttons/Button";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
