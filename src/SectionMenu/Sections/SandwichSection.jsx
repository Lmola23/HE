import Item from './../../Components/Item/Item.jsx';
import Seccion from './../../Components/Seccion/Seccion.jsx';
import images from './../../Utils/ImagesSandwich.js';
import FadeInSection from './../../Components/FadeInSection/FadeInSection.jsx';

export default function SandwichSection() {
  return (
    <Seccion
      title="Sandwich"
      urlImg={images.inicialSandwich}
      urlImg2={images.footerSandwich}
      Frase="Es leviosa, no leviosá."
    >
      <FadeInSection>
        <Item
          title="Sandwich de Queso"
          Descripcion=". Este sándwich de queso derretido te hará sentir como en un banquete en Hogwarts."
          precio="280$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Sandwich de Jamón"
          Descripcion="Este sándwich de queso derretido te hará sentir como en un banquete en Hogwarts."
          precio="290$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Sandwich de Salchicha"
          Descripcion="Este sándwich de salchicha es perfecto para cualquier mago o bruja en busca de una comida mágica y deliciosa."
          precio="300$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Sandwich de Chorizo "
          Descripcion="Un hechizo de sabor ahumado en cada bocado, perfecto para magos y brujas que buscan un toque picante en su comida."
          precio="300$"
          urlImg={images.column}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Sandwich de Jamón y Queso"
          Descripcion="Este sándwich es perfecto para satisfacer el hambre de cualquier mago o bruja en sus aventuras diarias."
          precio="400$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Sandwich de Chorizo y Queso"
          Descripcion="Una mezcla mágica de chorizo picante y queso derretido es un verdadero encantamiento de sabor que deleitará a cualquier mago o bruja."
          precio="400$"
          urlImg={images.colum}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Sandwich de Salchicha y Queso"
          Descripcion="Una combinación encantadora de salchicha jugosa y queso derretido, es un verdadero deleite para cualquier mago o bruja en busca de una comida mágica y sabrosa."
          precio="400$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>
    </Seccion>
  );
}