
import HeroSection from './HeroSection/HeroSection.jsx';
import ServicesSection from './ServicesSection/ServicesSection.jsx';
import ServiceFlowSection from './ServiceFlowSection/ServiceFlowSection.jsx';




const Home = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: `#FBF5E5` }}>
      
      <HeroSection />
      <ServicesSection />
      <ServiceFlowSection />
      
      {/* Add more sections here as needed */}
    </div>
  );
};

export default Home;