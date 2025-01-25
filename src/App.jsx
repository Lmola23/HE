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
        title="Cafés"
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

        <Item
          title="Cafés Cortado"
          Descripcion="Intenso y suave, una mezcla encantadora que hechiza tus sentidos."
          precio="100$"
          urlImg={images.espresoCafe}
          direccionFlex="row-reverse"
        />
        <Item
          title="Café Capuchino"
          Descripcion="Espuma suave y sabor encantador, un deleite mágico en cada taza."
          precio="200$"
          urlImg={images.espresoCafe}
          direccionFlex="row"
        />
        <Item
          title="Café Bombón"
          Descripcion="Dulce y cremoso, un verdadero encantamiento para tu paladar."
          precio="250$"
          urlImg={images.bombonCafe}
          direccionFlex="row-reverse"
        />
      </Seccion>
      <Seccion
        title="Dulces"
        urlImg={images.inicialDulce}
        urlImg2={images.footerDulce}
        Frase="La felicidad se puede hallar, incluso en los momentos más oscuros, si somos capaces de usar bien la luz."
      >
        <Item
          title="Flan de Leche"
          Descripcion="Un hechizo de energía en cada sorbo. Déjate revitalizar por su intensidad."
          precio="450$"
          urlImg={images.dulceFlanLeche}
          direccionFlex="column-reverse"

        />

        <Item
          title="Esalada Fria"
          Descripcion="Refrescante y deliciosa, preparada con el toque mágico de los elfos domésticos."
          precio="550$"
          urlImg={images.espresoCafe}
          direccionFlex="column-reverse"
        />











      </Seccion>
      <Footer />


    </div>
  );
}

export default App;
