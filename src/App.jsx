
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/hero/Hero";
import PlatformOverview from "./components/home/PlatformOverview";
import ProductExplorer from "./components/features/ProductExplorer";
import WhyConnectStream from "./components/trust/WhyConnectStream";
import Benefits from "./components/trust/Benefits";
import Testimonials from "./components/trust/Testimonials";
import ContactSection from "./components/contact/ContactSection";

function App() {
  return (
    <main className="cs-page" id="home">
      <Navbar />

      <Hero />

      <PlatformOverview />

      <ProductExplorer />

      <WhyConnectStream />

      <Benefits />

      <Testimonials />

      <ContactSection />

      <Footer />
    </main>
  );
}

export default App;