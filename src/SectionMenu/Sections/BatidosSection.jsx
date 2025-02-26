import Item from './../../Components/Item/Item.jsx';
import Seccion from './../../Components/Seccion/Seccion.jsx';
import images from './../../Utils/ImagesBatidos.js';
import FadeInSection from './../../Components/FadeInSection/FadeInSection.jsx'; // Agrega la importación

export default function BatidosSection() {
  return (
    <Seccion
      title="Batidos"
      urlImg={images.inicialBatido}
      urlImg2={images.footerBatido}
      Frase="No importa que seas una rata tonta, Weasley. La Gran Escalinata no distingue entre magos de sangre pura y traidores."
    >
      <FadeInSection>
        <Item
          title="Batido de Chocolate"
          Descripcion="Una bebida mágica y cremosa que te transportará a un dulce momento en el Gran Comedor de Hogwarts."
          precio="400$"
          urlImg={images.batidoChocolate}
          direccionFlex="column-reverse"
          scaleImage={1.2}
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Batido de fresa"
          Descripcion="Una bebida mágica y refrescante, ideal para disfrutar un dulce momento en el Gran Comedor de Hogwarts."
          precio="450$"
          urlImg={images.batidoFresa}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Batido de vainilla "
          Descripcion="Una bebida mágica y suave, ideal para disfrutar un dulce momento en el Gran Comedor de Hogwarts."
          precio="450$"
          urlImg={images.batidoVainilla}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Malta Condensada"
          Descripcion="Una bebida mágica y rica en sabor, perfecta para disfrutar un momento dulce en el Gran Comedor de Hogwarts."
          precio="550$"
          urlImg={images.d}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Frapé Hogwarts"
          Descripcion="Una bebida mágica que combina los sabores de chocolate, vainilla y fresa, perfecta para disfrutar un momento encantador en el Gran Comedor de Hogwarts."
          precio="500$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>
    </Seccion>
  );
}