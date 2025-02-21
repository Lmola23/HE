import React, { useState, useEffect } from 'react';
import { Header, Navigation, Footer } from './Components/index.js';
import { CafeSection, DulceSection, HamburguesaSection, SandwichSection, HotDogSection, EntrantesSection, PizzasSection, EspaguetisSection, BatidosSection, MalteadaSection, CoteclesSection, BebidasSection } from './SectionMenu/index.js';
import { ClipLoader } from 'react-spinners';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkResourcesLoaded = () => {
      const images = document.images;
      let allImagesLoaded = true;

      for (let i = 0; i < images.length; i++) {
        if (!images[i].complete) {
          allImagesLoaded = false;
          break;
        }
      }

      if (document.styleSheets.length > 0 && allImagesLoaded) {
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
          setTimeout(checkResourcesLoaded, 100);
        }
      } else {
        setTimeout(checkResourcesLoaded, 100);
      }
    };

    checkResourcesLoaded();
  }, []);

  return (
    <div className="bodyContainer">
      {/* Overlay de carga */}
      {isLoading && (
        <div className="loading-overlay">
          <ClipLoader color="#123abc" loading={isLoading} size={150} />
        </div>
      )}

      {/* Contenido principal de la página */}
      {!isLoading && (
        <>
          <Header />
          <Navigation />
          <CafeSection />
          <DulceSection />
          <HamburguesaSection />
          <SandwichSection />
          <HotDogSection />
          <EntrantesSection />
          <PizzasSection />
          <EspaguetisSection />
          <BatidosSection />
          <MalteadaSection />
          <CoteclesSection />
          <BebidasSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;