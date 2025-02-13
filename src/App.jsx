import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import CountriesSection from './components/CountriesSection';
import AdmissionProcessSection from './components/AdmissionProcessSection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <BenefitsSection />
      <CountriesSection />
      <AdmissionProcessSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}

export default App;