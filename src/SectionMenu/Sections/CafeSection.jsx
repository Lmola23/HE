import React from 'react';
import Item from './../../Components/Item/Item.jsx';
import Seccion from '../../Components/Seccion/Seccion.jsx';
import images from './../../Utils/ImagesCafe.js';
import FadeInSection from './../../Components/FadeInSection/FadeInSection.jsx';

export default function CafeSetion() {
  return (
    <Seccion
      title="Cafés"
      urlImg={images.inicialCafe}
      urlImg2={images.footerCafe}
      Frase="La felicidad se puede hallar, incluso en los momentos más oscuros, si somos capaces de usar bien la luz."
    >
      <FadeInSection>
        <Item
          title="Cafes Expreso"
          Descripcion="Un hechizo de energía en cada sorbo. Déjate revitalizar por su intensidad."
          precio="100$"
          urlImg={images.cafeExpreso}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Cafés Cortado"
          Descripcion="Intenso y suave, una mezcla encantadora que hechiza tus sentidos."
          precio="150$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Café Capuchino"
          Descripcion="Espuma suave y sabor encantador, un deleite mágico en cada taza."
          precio="200$"
          urlImg={images.cafeCapuchino}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Café Bombón"
          Descripcion="Dulce y cremoso, un verdadero encantamiento para tu paladar."
          precio="250$"
          urlImg={images.cafeBombon}
          direccionFlex="row-reverse"
        />
      </FadeInSection>
    </Seccion>
  );
}