import Item from './../../Components/Item/Item.jsx';
import Seccion from './../../Components/Seccion/Seccion.jsx';
import images from './../../Utils/ImagesEspaguetis.js';
import FadeInSection from './../../Components/FadeInSection/FadeInSection.jsx';

export default function EspaguetisSection(){
 return(
    <Seccion

      title={"Espaguetis"}
      urlImg={images.inicialEspagueti}
      urlImg2={images.footerEspagueti}
      background={images.fondoEspagueti}
      Frase="No hay bien y mal, solo hay poder y aquellos demasiado débiles para buscarlo"
    >
      <FadeInSection>
        <Item
          title="Espagueti Napolitano"
          Descripcion="Un plato digno de las cocinas mágicas de Hogwarts, que combina sabores exquisitos y un toque de encanto."
          precio="300$"
          urlImg={images.espreso}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Espagueti Doble Queso"
          Descripcion="Un plato mágico y cremoso, perfecto para una experiencia encantadora al estilo Hogwarts."
          precio="450$"
          urlImg={images.espreso}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Espagueti Jamón y Queso"
          Descripcion="Un plato encantador con sabores irresistibles, ideal para una cena mágica al estilo Hogwarts."
          precio="450$"
          urlImg={images.pizza}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Espagueti Hawaianas"
          Descripcion="Una pizza encantada con piña jugosa y jamón delicioso, digna de una fiesta en el Gran Comedor de Hogwarts."
          precio="500$"
          urlImg={images.pizza}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Espagueti Mixto"
          Descripcion="Un plato mágico que combina sabores exquisitos, perfecto para disfrutar una experiencia encantadora al estilo Hogwarts."
          precio="550$"
          urlImg={images.pizza}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Espagueti de Salchicha"
          Descripcion="Un plato encantador con salchichas jugosas, ideal para una experiencia mágica al estilo Hogwarts."
          precio="450$"
          urlImg={images.pizza}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Espagueti de Chorizo"
          Descripcion="Un plato mágico con chorizo jugoso, perfecto para disfrutar una experiencia encantadora al estilo Hogwarts."
          precio="450$"
          urlImg={images.espreso}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Espagueti de Camarones"
          Descripcion="Un plato mágico con camarones frescos y deliciosos, perfecto para disfrutar una cena encantadora al estilo Hogwarts."
          precio="600$"
          urlImg={images.pizza}
          direccionFlex="row-reverse"
        />
      </FadeInSection>
    </Seccion>
 );
}

