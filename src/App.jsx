import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Products from './Components/Products';
import LogoCard from './Components/LogoCard';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NestedProducts from './Components/NestedProducts';

const VIEWS = {
  HOME: 'home',
  NESTED_PRODUCTS: 'nestedProducts',
};

const App = () => {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);

  // 2. Navigation Functions
  const navigateToHome = () => {
    window.scrollTo(0, 0);
    setCurrentView(VIEWS.HOME);
  };

  const navigateToNestedProducts = () => {
    window.scrollTo(0, 0); 
    setCurrentView(VIEWS.NESTED_PRODUCTS);
  };

  const scrollToProducts = () => {
    navigateToHome();
    setTimeout(() => {
      const element = document.getElementById("products-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);
  }
  
  const scrollToPartners = () => {
    navigateToHome();
    setTimeout(() => {
      const element = document.getElementById("organizers-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);
  }

  const scrollToContacts = () => {
    navigateToHome();
    setTimeout(() => {
      const element = document.getElementById("contact-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);
  }

  const renderContent = () => {
    if (currentView === VIEWS.NESTED_PRODUCTS) {
      return <NestedProducts onBack={navigateToHome} />;
    }
    
    return (
      <>
        <Slider />
        <div id="products-section">
          <Products />
        </div>
        <div id="organizers-section">
          <LogoCard/>
        </div>
        <div id="contact-section">
          <Contact/>
        </div>
      </>
    );
  };

  return (
    <div>
      <Navbar 
        navigateToHome={navigateToHome} 
        navigateToNestedProducts={navigateToNestedProducts}
        
        scrollToProducts={scrollToProducts} 
        scrollToPartners={scrollToPartners}
        scrollToContacts={scrollToContacts}
      />

      <main>
        {renderContent()}
      </main>

      <Footer/>
    </div>
  )
}

export default App;