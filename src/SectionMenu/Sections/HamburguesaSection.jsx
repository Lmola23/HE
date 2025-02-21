import Item from './../../Components/Item/Item.jsx';
import Seccion from './../../Components/Seccion/Seccion.jsx';
import images from './../../Utils/ImagesHamburguesa.js';
import FadeInSection from './../../Components/FadeInSection/FadeInSection.jsx';

export default function HamburguesaSetion(){
  return(
    <Seccion
      title="Hamburguesas"
      urlImg={images.inicialHamburguesa}
      urlImg2={images.footerHamburguesa}
      Frase="Dobby no tiene amo. Dobby es un elfo libre, y Dobby ha venido a salvar a Harry Potter y a sus amigos."
    >
      <FadeInSection>
        <Item
          title="Hamburguesa Clasica"
          Descripcion="Jugosa y deliciosa,Carne, vegetales y salsas, una obra maestra mágica que satisface hasta los apetitos más voraces."
          precio="400$"
          urlImg={images.hamburguesaClasica}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Hamburguesas Picante"
          Descripcion="Intensamente sabrosa,Carne, vegetales, queso, salsas, picante y con un toque de fuego, perfecta para los valientes que buscan una explosión de sabor."
          precio="500$"
          urlImg={images.hamburguesaPicante}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Hamburguesas de Jamón"
          Descripcion="Intensamente sabrosa,Carne, vegetales, jamón y salsas perfecta  explosión de sabor."
          precio="500$"
          urlImg={images.Hamburguesa}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Hamburguesa de Queso"
          Descripcion="Deliciosamente derretida y llena de encanto, cada bocado es un hechizo de sabor que te transportará al mundo mágico."
          precio="500$"
          urlImg={images.hamburguesaQueso}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="SuperBurguer"
          Descripcion="Deliciosamente derretida con oble carne, vegetales, queso, jamón y salsas, acompañado con vianda frita y llena de encanto, cada bocado es un hechizo de sabor que te transportará al mundo mágico."
          precio="1200$"
          urlImg={images.hamburguesaSuper}
          direccionFlex="row-reverse"
        />
      </FadeInSection>
    </Seccion>
  );
}