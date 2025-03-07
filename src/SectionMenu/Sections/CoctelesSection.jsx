import React from 'react';
import Item from './../../Components/Item/Item.jsx';
import Seccion from './../../Components/Seccion/Seccion.jsx';
import images from './../../Utils/ImagesCocteles.js';
import FadeInSection from './../../Components/FadeInSection/FadeInSection.jsx';

export default function CoctelesSection() {
  return (
    <Seccion
      title="Cócteles"
      urlImg={images.inicialCocteles}
      urlImg2={images.footerCoctel}
      Frase="Libros! ¡Y astucia! Hay cosas más importantes,amistad y valentía"
    >
      <FadeInSection>
        <Item
          title="Medusa Shot"
          Descripcion="Una bebida mágica y electrizante, que combina ingredientes cautivadores y misteriosos, perfecta para sorprender y deleitar en el Gran Comedor de Hogwarts."
          precio="750$"
          urlImg={images.coctelMedusaShot}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Toro Bravo"
          Descripcion="Una bebida mágica y poderosa, que combina el vigor del tequila con un toque enérgico de cítricos y especias, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="500$"
          urlImg={images.coctelToroBravo}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Margarita Tradicional"
          Descripcion="Una bebida mágica y refrescante, que combina el clásico sabor de la margarita con un toque encantador, perfecta para deleitarse en el Gran Comedor de Hogwarts."
          precio="750$"
          urlImg={images.coctelMargarita}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Margarita Blue"
          Descripcion="Una bebida mágica y vibrante, que combina un refrescante toque azul con el clásico encanto de la margarita, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="650$"
          urlImg={images.coctelMargaritaBlue}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Mojito Cubano"
          Descripcion="Un cóctel mágico y refrescante, que combina la frescura de la menta y la lima con el encanto de Hogwarts, perfecto para disfrutar en el Gran Comedor."
          precio="550$"
          urlImg={images.coctelMojitoCubano}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Cuba Libre"
          Descripcion="Un cóctel mágico y clásico, que combina el sabor refrescante del ron y la cola con un toque de limón, perfecto para disfrutar en el Gran Comedor de Hogwarts."
          precio="500$"
          urlImg={images.coctelCubaLibre}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Gin Tonic"
          Descripcion="Un cóctel mágico y elegante, que combina la frescura del gin y la tónica con un toque encantador de Hogwarts, perfecto para disfrutar en el Gran Comedor."
          precio="600$"
          urlImg={images.coctelGinTonic}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Daiquiri Rebelde"
          Descripcion="Un cóctel mágico y audaz, que combina el sabor refrescante del ron y el limón con un toque rebelde al estilo de Hogwarts, perfecto para disfrutar en el Gran Comedor."
          precio="500$"
          urlImg={images.coctelDaiquiriRebelde}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Martini"
          Descripcion="Un cóctel mágico y sofisticado, que combina la elegancia del gin y el vermut con un toque encantador al estilo de Hogwarts, perfecto para disfrutar en el Gran Comedor."
          precio="600"
          urlImg={images.coctelMartini}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Michelada"
          Descripcion="Una bebida mágica y refrescante, que combina la cerveza, el jugo de limón y una mezcla de sabores picantes, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="750$"
          urlImg={images.coctelMichelada}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Chelada"
          Descripcion="Una bebida mágica y refrescante, que mezcla la frescura de la cerveza con el jugo de limón y un toque de sal, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="500$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Piña Colada"
          Descripcion="Una bebida mágica y tropical, que combina la dulzura de la piña y el coco con un toque encantador de Hogwarts, perfecta para disfrutar en el Gran Comedor."
          precio="750$"
          urlImg={images.coctelPinaColada}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Alenxander"
          Descripcion="Una bebida mágica y sofisticada, que combina la suavidad del brandy, la crema de cacao y la crema de leche, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="750$"
          urlImg={images.coctelAlexander}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Grandfather"
          Descripcion="Una bebida mágica y reconfortante, que combina la riqueza del whisky escocés con un toque encantador de amaretto, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="550$"
          urlImg={images.coctelGrandFather}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Poción Multijugos"
          Descripcion="Una bebida mágica y transformadora, que combina ingredientes secretos para permitirte adoptar la apariencia de otra persona, perfecta para experimentar aventuras en el Gran Comedor de Hogwarts."
          precio="800"
          urlImg={images.coctelPosionMultijugos}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Bloody Mery"
          Descripcion="Una bebida mágica y vibrante, que combina el jugo de tomate con un toque de vodka y especias encantadoras, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="600$"
          urlImg={images.coctelBloodyMery}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Orgasmo"
          Descripcion="Un sueve y cremoso trago, que como su nombre lo indica puede resultar muy placentero"
          precio="800$"
          urlImg={images.coctelOrgasmo}
          direccionFlex="row"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Limonada Frapé"
          Descripcion="Una bebida mágica y refrescante, con un toque encantador de hielo frapé, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="320$"
          urlImg={images.coctelLimonadaFrape}
          direccionFlex="row-reverse"
        />
      </FadeInSection>

      <FadeInSection>
        <Item
          title="Amortentia"
          Descripcion="Un cóctel hechicero de amor con fragancias irresistibles y sabores mágicos."
          precio="600$"
          urlImg={images.coctelAmortentia}
          direccionFlex="row"
        />
      </FadeInSection>
    </Seccion>
  );
}