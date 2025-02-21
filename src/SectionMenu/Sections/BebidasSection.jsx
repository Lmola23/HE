import Item from "./../../Components/Item/Item.jsx";
import Seccion from "./../../Components/Seccion/Seccion.jsx";
import images from "./../../Utils/ImagesBebidas.js";

export default function BebidasSection() {
 return(
    <Seccion
    title="Bebidas"
    urlImg={images.inicialBebida}
    urlImg2={images.footerBebida}
    Frase="Lo que importa no es lo que somos al nacer, sino lo que hacemos de nosotros mismos."

  >
    <Item
      title="Cerveza Cristal"
      Descripcion=""
      precio="300$"
      urlImg={images.bebidaCervezaCristal}
      direccionFlex="row"
    />
    <Item
      title="Cerveza Bucanero"
      Descripcion=""
      precio="300$"
      urlImg={images.bebidaCervezaBucanero}
      direccionFlex="row-reverse"
    />
    <Item
      title="Cerveza Widmill"
      Descripcion=""
      precio="250$"
      urlImg={images.bebidaCervezaWindmill}
      direccionFlex="row"

    />
    <Item
      title="Cerveza Cacique"
      Descripcion=""
      precio="240$"
      urlImg={images.bebidaCervezaCacique}
      direccionFlex="row-reverse"
    />
    <Item
      title="Cerveza Beck's"
      Descripcion=""
      precio="280$"
      urlImg={images.bebidaCervezaBeck}
      direccionFlex="row"
    />

    <Item
      title="Malta"
      Descripcion=""
      precio="300$"
      urlImg={images.bebidaMalta}
      direccionFlex="row-reverse"
    />
    <Item
      title="Jugo"
      Descripcion=""
      precio="230$"
      urlImg={images.bebidaJugo}
      direccionFlex="row"
    />
    <Item
      title="Refresco"
      Descripcion=""
      precio="250$"
      urlImg={images.bebidaRefresco}
      direccionFlex="row-reverse"
    />
    <Item
      title="Agua"
      Descripcion=""
      precio="250$"
      urlImg={images.bebidaAgua}
      direccionFlex="row"
    />
  </Seccion>
 );
}