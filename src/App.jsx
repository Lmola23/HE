import React, { useState, useEffect } from 'react';
import { Header, Navigation, Footer } from './Components/index.js';
import { CafeSection, DulceSection, HamburguesaSection, SandwichSection, HotDogSection, EntrantesSection, BatidosSection, MalteadaSection, CoteclesSection, BebidasSection } from './SectionMenu/index.js';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkStylesLoaded = () => {
      if (document.styleSheets.length > 0) {
        let allStylesLoaded = true;
        for (let i = 0; i < document.styleSheets.length; i++) {
          try {
            document.styleSheets[i].cssRules;
          } catch (e) {
            allStylesLoaded = false;
            break;
          }
        }
        if (allStylesLoaded) {
          setIsLoading(false);
        } else {
          setTimeout(checkStylesLoaded, 100);
        }
      } else {
        setTimeout(checkStylesLoaded, 100);
      }
    };

    checkStylesLoaded();
  }, []);

  return (
    <div className="bodyContainer">
      {/* Overlay de carga */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* Contenido principal de la página */}
      <Header />
      <Navigation />
      <CafeSection />
      <DulceSection />
      <HamburguesaSection />
      <SandwichSection />
      <HotDogSection />
      <EntrantesSection />
      <BatidosSection />
      <MalteadaSection />
      <CoteclesSection />
      <BebidasSection />
      <Footer />
    </div>
  );
}

export default App;