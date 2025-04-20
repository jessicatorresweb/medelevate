
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import AboutUs from "../components/AboutUs";
import CeoIntro from "../components/CeoIntro";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <AboutUs />
      <CeoIntro />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

