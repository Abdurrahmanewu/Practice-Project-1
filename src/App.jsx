// import "./App.css";

import Button from "./Components/Buttons/Button";
import CompaniesLogo from "./Components/CompaniesLogo/CompaniesLogo";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Service1 from "./Components/ServiceScetion/Service1/Service1";
import Service2 from "./Components/ServiceScetion/Service2/Service2";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <CompaniesLogo />
        <Service1 />
        <Service2 />
        <Testimonial />
        <Pricing />
      </div>
    </>
  );
}

export default App;
