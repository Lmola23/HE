import React from 'react';
import Item from './../../Components/Item/Item.jsx';
import Seccion from './../../Components/Seccion/Seccion.jsx';
import images from './../../Utils/ImagesHotDog.js';
import FadeInSection from './../../Components/FadeInSection/FadeInSection.jsx';

export default function HotDogSection() {
  return (
    <Seccion
      title="HotDog"
      urlImg={images.inicialHogDog}
      urlImg2={images.footerHogDog}
      Frase="Tienes... Sí, tienes el coraje necesario para ser un verdadero Gryffindor, aunque Slytherin te ayudaría en tu camino a la grandeza, no hay duda."
    >
      <FadeInSection>
        <Item
          title="Hot Dog Clásico"
          Descripcion="Perro calient, ketchup, mayonesa y mostaza."
          precio="400$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Hot Dog Harizona"
          Descripcion="Perro caliente envuelto en jamón, vegetales picoteados, mayonesa, salsas y mostaza."
          precio="550$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Hot Dog Chicago"
          Descripcion="Perro caliente con vegetales picoteados, mayonesa, ketchup y mostaza."
          precio="420$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Hot Dog Carolina"
          Descripcion="Perro caliente, vegetales picoteados, con salsa picante, salsas, mayonesa y mostaza."
          precio="450$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Hot Dog New York"
          Descripcion="Perro caliente, cuadros de queso y jamón, vegetales, salsa especial, mayonesa y mostaza."
          precio="650$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Hot Dog Hogwarts"
          Descripcion="Este hot dog de Perro caliente envuelto en jamón y queso, con vegetales picoteados, ketchup, mostaza y mayonesa, está encantado con sabores mágicos que transportarán tus papilas gustativas a un festín en la escuela de magia más famosa del mundo."
          precio="700$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>
    </Seccion>
  );
}