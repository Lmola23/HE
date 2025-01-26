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
        Frase="Tengo una idea mejor. ¡Gastémoslo todo en dulces!"
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
      <Seccion
        title="Hamburguesas"
        urlImg={images.inicialHamburguesa}
        urlImg2={images.footerHamburguesa}
        Frase="Tengo una idea mejor. ¡Gastémoslo todo en dulces!"
      >
        <Item
          title="Hamburguesa Clasica"
          Descripcion="Jugosa y deliciosa, una obra maestra mágica que satisface hasta los apetitos más voraces."
          precio="400$"
          urlImg={images.espresoCafe}
          direccionFlex="row-reverse"

        />
        <Item
          title="Hamburguesas Picante"
          Descripcion="Intensamente sabrosa y con un toque de fuego, perfecta para los valientes que buscan una explosión de sabor."
          precio="500$"
          urlImg={images.espresoCafe}
          direccionFlex="row"
        />
        <Item
          title="Hamburguesa de Queso"
          Descripcion="Deliciosamente derretida y llena de encanto, cada bocado es un hechizo de sabor que te transportará al mundo mágico."
          precio="500$"
          urlImg={images.hamburguesaQueso}
          direccionFlex="row-reverse"

        />
        <Item
          title="SuperBurguer"
          Descripcion="Deliciosamente derretida y llena de encanto, cada bocado es un hechizo de sabor que te transportará al mundo mágico."
          precio="1200$"
          urlImg={images.hamburguesaSuper}
          direccionFlex="row"
        />
      </Seccion>
      <Seccion
        title="Sandwich"
        urlImg={images.inicialSandwich}
        urlImg2={images.footerSandwich}
        Frase="Es leviosa, no leviosá."
      >
        <Item
          title="Sandwich de Queso"
          Descripcion=". Este sándwich de queso derretido te hará sentir como en un banquete en Hogwarts."
          precio="280$"
          urlImg={images.espresoCafe}
          direccionFlex="row-reverse"

        />
        <Item
          title="Sandwich de Jamón"
          Descripcion="Este sándwich de queso derretido te hará sentir como en un banquete en Hogwarts."
          precio="290$"
          urlImg={images.espresoCafe}
          direccionFlex="row-reverse"
        />
        <Item
          title="Sandwich de Salchicha"
          Descripcion="Este sándwich de salchicha es perfecto para cualquier mago o bruja en busca de una comida mágica y deliciosa."
          precio="300$"
          urlImg={images.espresoCafe}
          direccionFlex="row"

        />
        <Item
          title="Sandwich de Chorizo "
          Descripcion="Un hechizo de sabor ahumado en cada bocado  perfecto para magos y brujas que buscan un toque picante en su comida."
          precio="300$"
          urlImg={images.espresoCafe}
          direccionFlex="row"
        />
        <Item
          title="Sandwich de Jamón y Queso"
          Descripcion="Este sándwich es perfecto para satisfacer el hambre de cualquier mago o bruja en sus aventuras diarias."
          precio="400$"
          urlImg={images.espresoCafe}
          direccionFlex="row-reverse"
        />
        <Item
          title="Sandwich de Chorizo y Queso"
          Descripcion="Una mezcla mágica de chorizo picante y queso derretido es un verdadero encantamiento de sabor que deleitará a cualquier mago o bruja."
          precio="400$"
          urlImg={images.espresoCafe}
          direccionFlex="row-reverse"
        />
        <Item
          title="Sandwich de Salchicha y Queso"
          Descripcion="Una combinación encantadora de salchicha jugosa y queso derretido. es un verdadero deleite para cualquier mago o bruja en busca de una comida mágica y sabrosa."
          precio="400$"
          urlImg={images.espresoCafe}
          direccionFlex="column-reverse"

        />
      </Seccion>
      <Seccion
        title="Hog Dog"
        urlImg={images.inicialHogDog}
        urlImg2={images.footerHogDog}
        Frase="Tienes... Sí, tienes el coraje necesario para ser un verdadero Gryffindor, aunque Slytherin te ayudaría en tu camino a la grandeza, no hay duda."
      >
        <Item
          title="Hog Dog Harizona"
          Descripcion="Una delicia mágica en cada mordisco. Este hot dog Harizona está lleno de hechizos de sabor que encantará a cualquier mago o bruja hambrienta."
          precio="550$"
          urlImg={images.espresoCafe}
          direccionFlex="column-reverse"

        />
        <Item
          title="Hog Dog Chicago"
          Descripcion="Un festín encantador con un toque urbano. Este hot dog Chicago está lleno de hechizos de sabor que transportarán tus papilas gustativas a una aventura mágica en cada bocado."
          precio="400$"
          urlImg={images.espresoCafe}
          direccionFlex="column-reverse"
        />
        <Item
          title="Hog Dog Carolina "
          Descripcion="Una explosión de sabores sureños en cada bocado. Este hot dog Carolina está encantado con ingredientes mágicos que deleitarán a cualquier mago o bruja aventurera."
          precio="450$"
          urlImg={images.espresoCafe}
          direccionFlex="column-reverse"

        />
        <Item
          title="Hog Dog New York"
          Descripcion="Un clásico urbano con un toque mágico. Este hot dog New York está encantado con ingredientes hechizados que harán que cualquier mago o bruja se sienta en el corazón de la Gran Manzana."
          precio="650$"
          urlImg={images.espresoCafe}
          direccionFlex="column-reverse"
        />
        <Item
          title="Hog Dog Hogwarts"
          Descripcion="Este hot dog Hogwarts está encantado con sabores mágicos que transportarán tus papilas gustativas a un festín en la escuela de magia más famosa del mundo."
          precio="700$"
          urlImg={images.espresoCafe}
          direccionFlex="column-reverse"
        />

      </Seccion>



      <Footer />



    </div>
  );
}

export default App;
