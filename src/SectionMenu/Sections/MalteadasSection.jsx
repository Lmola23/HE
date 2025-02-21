import Item from "./../../Components/Item/Item.jsx";
import Seccion from "./../../Components/Seccion/Seccion.jsx";
import images from "./../../Utils/ImagesMalteadas.js";

export default function MalteadasSection() {

return(
<Seccion
        title="Malteadas"
        urlImg={images.inicialMalteada}
        urlImg2={images.footerMalteada}
        Frase="Juro solemnemente que mis intenciones no son buenas."

      >
        <Item
          title="Malteada de Fresa"
          Descripcion="Una bebida mágica, refrescante y llena de sabor, perfecta para disfrutar un dulce momento en el Gran Comedor de Hogwarts."
          precio="600$"
          urlImg={images.malteadaFresa}
          direccionFlex="row"
        />

        <Item
          title="Malteada de vainilla"
          Descripcion="Una bebida mágica, suave y cremosa, perfecta para disfrutar un dulce momento en el Gran Comedor de Hogwarts."
          precio="550$"
          urlImg={images.malteadaVainilla}
          direccionFlex="row-reverse"
        />
        <Item
          title="Malteada de chocolate"
          Descripcion="Una bebida celestial que combina la magia del chocolate con una suavidad increíble, perfecta para deleitarse en el Gran Comedor de Hogwarts."
          precio="600$"
          urlImg={images.malteadaChocolate}
          direccionFlex="row"
        />
        <Item
          title="Malteada de Nutela"
          Descripcion="Una bebida mágica y decadente, que combina la rica suavidad de la Nutella, perfecta para deleitarse en el Gran Comedor de Hogwarts."
          precio="900$"
          urlImg={images.malteadaNutela}
          direccionFlex="row-reverse"
        />
      </Seccion>
);
}