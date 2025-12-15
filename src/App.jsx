// import "./App.css";

import Button from "./Components/Buttons/Button";
import CompaniesLogo from "./Components/CompaniesLogo/CompaniesLogo";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Service1 from "./Components/ServiceScetion/Service1/Service1";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <CompaniesLogo />
        <Service1 />
      </div>
    </>
  );
}

export default App;
