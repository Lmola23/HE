import Header from './Component/Header/Header.jsx';
import Navigation from './Component/Navagation/Navegation.jsx';
import Seccion from './Component/Seccion/Seccion.jsx';
import Item from './Component/Item/Item.jsx';
import images from './Utils/Images.js';
import Footer from './Component/Footer/Footer.jsx';
import './App.css';



function App() {
  return (
    <div className="bodyContainer">
      <Header />
      <Navigation />
      <Seccion
        title="CAFÉS"
        urlImg={images.inicialCafe}
        urlImg2={images.footerCafe}
        Frase="La felicidad se puede hallar, incluso en los momentos más oscuros, si somos capaces de usar bien la luz."
      >
        <Item
          title="Cafes Expreso"
          Descripcion="Un hechizo de energía en cada sorbo. Déjate revitalizar por su intensidad."
          precio="100$"
          urlImg={images.espresoCafe}
          direccionFlex="row"
        />

      </Seccion>
      <Footer />


    </div>
  );
}

export default App;
