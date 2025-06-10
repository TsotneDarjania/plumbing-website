import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Services from "./components/services/Services";
import ContactForm from "./components/contactform/Contactform";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Services />
      <ContactForm />
      <Experience />
      {/* <PricingPlans /> */}
    </div>
  );
}

export default App;
