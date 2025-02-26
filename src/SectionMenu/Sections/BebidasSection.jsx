import React from "react";
import Item from "./../../Components/Item/Item.jsx";
import Seccion from "./../../Components/Seccion/Seccion.jsx";
import images from "./../../Utils/ImagesBebidas.js";
import FadeInSection from "./../../Components/FadeInSection/FadeInSection.jsx";

export default function BebidasSection() {
  return (
    <Seccion
      title="Bebidas"
      urlImg={images.inicialBebida}
      urlImg2={images.footerBebida}
      Frase="Lo que importa no es lo que somos al nacer, sino lo que hacemos de nosotros mismos."
    >
      <FadeInSection>
        <Item
          title="Cerveza Cristal"
          Descripcion=""
          precio="300$"
          urlImg={images.bebidaCervezaCristal}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Cerveza Bucanero"
          Descripcion=""
          precio="300$"
          urlImg={images.bebidaCervezaBucanero}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Cerveza Widmill"
          Descripcion=""
          precio="250$"
          urlImg={images.bebidaCervezaWindmill}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Cerveza Cacique"
          Descripcion=""
          precio="240$"
          urlImg={images.bebidaCervezaCacique}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Cerveza Beck's"
          Descripcion=""
          precio="280$"
          urlImg={images.bebidaCervezaBeck}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Malta"
          Descripcion=""
          precio="300$"
          urlImg={images.bebidaMalta}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Jugo"
          Descripcion=""
          precio="230$"
          urlImg={images.bebidaJugo}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Refresco"
          Descripcion=""
          precio="250$"
          urlImg={images.bebidaRefresco}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Agua"
          Descripcion=""
          precio="250$"
          urlImg={images.bebidaAgua}
          direccionFlex="row"
        />
      </FadeInSection>
    </Seccion>
  );
}