import Header from './Component/Header/Header.jsx';
import Navigation from './Component/Navagation/Navegation.jsx';
import Seccion from './Component/Seccion/Seccion.jsx';
import Item from './Component/Item/Item.jsx';
import images from './Utils/Images.js';
import Footer from './Component/Footer/Footer.jsx';
import imgFondoSpa from './assets/fondoEspagueti.png';
import './styles/fonts.css';
import './App.css';



function App() {
  return (
    <div className="bodyContainer">
      <Header />
      <Navigation />
      <Seccion
        title="Cafés"
        urlImg={images.inicialCafe}
        urlImg2={images.footerCafe}
        Frase="La felicidad se puede hallar, incluso en los momentos más oscuros, si somos capaces de usar bien la luz."
      >
        <Item
          title="Cafes Expreso"
          Descripcion="Un hechizo de energía en cada sorbo. Déjate revitalizar por su intensidad."
          precio="100$"
          urlImg={images.espreso}
          direccionFlex="row"
        />

        <Item
          title="Cafés Cortado"
          Descripcion="Intenso y suave, una mezcla encantadora que hechiza tus sentidos."
          precio="150$"
          urlImg={images.espreso}
          direccionFlex="row-reverse"
        />
        <Item
          title="Café Capuchino"
          Descripcion="Espuma suave y sabor encantador, un deleite mágico en cada taza."
          precio="200$"
          urlImg={images.espreso}
          direccionFlex="row"
        />
        <Item
          title="Café Bombón"
          Descripcion="Dulce y cremoso, un verdadero encantamiento para tu paladar."
          precio="250$"
          urlImg={images.bombonCafe}
          direccionFlex="row-reverse"
        />
      </Seccion>
      <Seccion
        title="Dulces"
        urlImg={images.inicialDulce}
        urlImg2={images.footerDulce}
        Frase="Tengo una idea mejor. ¡Gastémoslo todo en dulces!"
      >
        <Item
          title="Flan de Leche"
          Descripcion="Un hechizo de energía en cada sorbo. Déjate revitalizar por su intensidad."
          precio="450$"
          urlImg={images.dulceFlanLeche}
          direccionFlex="column-reverse"

        />

        <Item
          title="Esalada Fria"
          Descripcion="Refrescante y deliciosa, preparada con el toque mágico de los elfos domésticos."
          precio="550$"
          urlImg={images.dulce}
          direccionFlex="column-reverse"
        />
      </Seccion>
      <Seccion
        title="Hamburguesas"
        urlImg={images.inicialHamburguesa}
        urlImg2={images.footerHamburguesa}
        Frase="Tengo una idea mejor. ¡Gastémoslo todo en dulces!"
      >
        <Item
          title="Hamburguesa Clasica"
          Descripcion="Jugosa y deliciosa,Carne, vegetales y salsas, una obra maestra mágica que satisface hasta los apetitos más voraces."
          precio="400$"
          urlImg={images.Hamburguesa}
          direccionFlex="row-reverse"

        />
        <Item
          title="Hamburguesas Picante"
          Descripcion="Intensamente sabrosa,Carne, vegetales, queso, salsas, picante y con un toque de fuego, perfecta para los valientes que buscan una explosión de sabor."
          precio="500$"
          urlImg={images.Hamburguesa}
          direccionFlex="row"
        />
        <Item
          title="Hamburguesas de Jamón"
          Descripcion="Intensamente sabrosa,Carne, vegetales, jamón y salsas perfecta  explosión de sabor."
          precio="500$"
          urlImg={images.Hamburguesa}
          direccionFlex="row-reverse"
        />

        <Item
          title="Hamburguesa de Queso"
          Descripcion="Deliciosamente derretida y llena de encanto, cada bocado es un hechizo de sabor que te transportará al mundo mágico."
          precio="500$"
          urlImg={images.hamburguesaQueso}
          direccionFlex="row"

        />
        <Item
          title="SuperBurguer"
          Descripcion="Deliciosamente derretida con oble carne, vegetales, queso, jamón y salsas, acompañado con vianda frita y llena de encanto, cada bocado es un hechizo de sabor que te transportará al mundo mágico."
          precio="1200$"
          urlImg={images.hamburguesaSuper}
          direccionFlex="row-reverse"
        />
      </Seccion>
      <Seccion
        title="Sandwich"
        urlImg={images.inicialSandwich}
        urlImg2={images.footerSandwich}
        Frase="Es leviosa, no leviosá."
      >
        <Item
          title="Sandwich de Queso"
          Descripcion=". Este sándwich de queso derretido te hará sentir como en un banquete en Hogwarts."
          precio="280$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"

        />
        <Item
          title="Sandwich de Jamón"
          Descripcion="Este sándwich de queso derretido te hará sentir como en un banquete en Hogwarts."
          precio="290$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
        <Item
          title="Sandwich de Salchicha"
          Descripcion="Este sándwich de salchicha es perfecto para cualquier mago o bruja en busca de una comida mágica y deliciosa."
          precio="300$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"

        />
        <Item
          title="Sandwich de Chorizo "
          Descripcion="Un hechizo de sabor ahumado en cada bocado  perfecto para magos y brujas que buscan un toque picante en su comida."
          precio="300$"
          urlImg={images.column}
          direccionFlex="column-reverse"
        />
        <Item
          title="Sandwich de Jamón y Queso"
          Descripcion="Este sándwich es perfecto para satisfacer el hambre de cualquier mago o bruja en sus aventuras diarias."
          precio="400$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
        <Item
          title="Sandwich de Chorizo y Queso"
          Descripcion="Una mezcla mágica de chorizo picante y queso derretido es un verdadero encantamiento de sabor que deleitará a cualquier mago o bruja."
          precio="400$"
          urlImg={images.colum}
          direccionFlex="column-reverse"
        />
        <Item
          title="Sandwich de Salchicha y Queso"
          Descripcion="Una combinación encantadora de salchicha jugosa y queso derretido. es un verdadero deleite para cualquier mago o bruja en busca de una comida mágica y sabrosa."
          precio="400$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"

        />
      </Seccion>
      <Seccion
        title="HotDog"
        urlImg={images.inicialHogDog}
        urlImg2={images.footerHogDog}
        Frase="Tienes... Sí, tienes el coraje necesario para ser un verdadero Gryffindor, aunque Slytherin te ayudaría en tu camino a la grandeza, no hay duda."
      >
        <Item
          title="Hot Dog Clásico"
          Descripcion="Perro calient, ketchup, mayonesa y mostaza ."
          precio="400$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"

        />

        <Item
          title="Hot Dog Harizona"
          Descripcion="Perro caliente envuelto en jamón, vegetales picoteados, mayonesa, salsas y mostaza."
          precio="550$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"

        />
        <Item
          title="Hot Dog Chicago"
          Descripcion="Perro caliente con vegetales picoteados, mayonesa, ketchup y mostaza."
          precio="400$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
        <Item
          title="Hot Dog Carolina "
          Descripcion="Perro caliente, vegetales picoteados, con salsa picante, salsas, mayonesa y mostaza."
          precio="450$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"

        />
        <Item
          title="Hot Dog New York"
          Descripcion="Perro caliente, cuadros de queso y jamón, vegetales, salsa especial, mayonesa y mostaza."
          precio="650$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
        <Item
          title="Hot Dog Hogwarts"
          Descripcion="Este hot dog de Perro caliente envuelto en jamón y queso, con vegetales picoteados, kepchu , mostaza y mayonesa está encantado con sabores mágicos que transportarán tus papilas gustativas a un festín en la escuela de magia más famosa del mundo."
          precio="700$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />

      </Seccion>
      <Seccion
        title="Entrantes"
        urlImg={images.inicialEntrante}
        urlImg2={images.footerEntrante}
        Frase=" ¿Por qué no seguimos las arañas? ¿Por qué no podemos seguir las mariposas?"
      >
        <Item
          title="Croquetas Tradicionales"
          Descripcion="Crujientes por fuera y cremosas por dentro, con un toque hechizado."
          precio="500$"
          urlImg={images.entranteCroqueta}
          direccionFlex="row-reverse"

        />
        <Item
          title="Entremes de Jamón y Queso"
          Descripcion="Finísimas lonchas de jamón y queso, perfectas para disfrutar en el Gran Comedor de Hogwarts."
          precio="1000$"
          urlImg={images.entranteEntreme}
          direccionFlex="row-reverse"
        />
        <Item
          title="Tostones Rellenos de Jamón y Queso"
          Descripcion="Crujientes tostones rellenos de jamón y queso fundido, con un toque de magia."
          precio="800$"
          urlImg={images.entranteTostonJamonQueso}
          direccionFlex="row"

        />
        <Item
          title="Tostones Rellenos de Camarón"
          Descripcion="Crujientes tostones rellenos de camarón fresco, con un toque de magia marina."
          precio="1000$"
          urlImg={images.entranteTostonCamaron}
          direccionFlex="row"
        />
        <Item
          title="Tostones Rellenos de Pulpo"
          Descripcion="Crujientes tostones rellenos de pulpo tierno, sazonados con un toque de magia marina, directos desde la cocina de las sirenas de Hogwarts."
          precio="1000$"
          urlImg={images.entrante}
          direccionFlex="row-reverse"
        />
        <Item
          title="Chorizo al Cabón"
          Descripcion="Jugoso chorizo asado al carbón, con un toque mágico de Hogwarts."
          precio="500$"
          urlImg={images.entrante}
          direccionFlex="row-reverse"
        />
        <Item
          title="Brochetas Hawaianas"
          Descripcion="Jugosos trozos de carne, piña, jamón y queso, asados con un toque mágico."
          precio="800$"
          urlImg={images.entranteBrocheta}
          direccionFlex="row"
        />
        <Item
          title="Rollitos de Jamón y Queso"
          Descripcion="Delicados rollitos de jamón y queso, envueltos en un hechizo delicioso que te transportará al Gran Comedor de Hogwarts."
          precio="1500$"
          urlImg={images.entranteRolloJamonQueso}
          direccionFlex="row"

        />
        <Item
          title="Papas Bravas"
          Descripcion="Un plato mágico y picante, que combina la crujiente textura de las papas con una salsa encantadora y audaz, perfecto para disfrutar en el Gran Comedor de Hogwarts."
          precio="800$"
          urlImg={images.entrante}
          direccionFlex="column-reverse"
        />
        <Item
          title="Chicharrita"
          Descripcion="Combina la crujiente textura de las rodajas finas de burro frito con un toque encantador de sal y especias, perfecto para disfrutar en el Gran Comedor de Hogwarts."
          precio="250$"
          urlImg={images.entrante}
          direccionFlex="column-reverse"
        />
        <Item
          title="Salchipapas"
          Descripcion="Crujientes papas fritas con trozos de salchicha dorada, bañadas en un hechizo de sabor que te hará sentir como en una fiesta de Hogwarts."
          precio="1000$"
          urlImg={images.entranteSalchipapa}
          direccionFlex="column-reverse"
        />
        <Item
          title="Surtido Tropical"
          Descripcion="Un festín mágico con croquetas, jamón, queso, galletas saladas y crujientes tostones."
          precio="1800$"
          urlImg={images.entranteSurtidoTropical}
          direccionFlex="column-reverse"

        />
        <Item
          title="Completa de la Casa"
          Descripcion="Un banquete digno de Hogwarts con brochetas hechizadas, tostones rellenos, jamón, queso, croquetas mágicas y crujientes galletas saladas."
          precio="2800$"
          urlImg={images.entrante}
          direccionFlex="column-reverse"
        />



      </Seccion>

      <Seccion
        title="Pizzas"
        urlImg={images.inicialPizza}
        urlImg2={images.footerPizza}
        Frase="La felicidad se puede hallar, incluso en los momentos más oscuros, si somos capaces de usar bien la luz."
      >
        <Item
          title="Pizza Napolitana"
          Descripcion="Una deliciosa creación traída directamente desde las cocinas mágicas de Hogwarts, perfecta para satisfacer cualquier antojo."
          precio="250$"
          urlImg={images.espreso}
          direccionFlex="row"
        />

        <Item
          title="Pizza de Doble Queso"
          Descripcion="Una pizza con una doble capa de queso derretido, tan deliciosa que parece salida de las cocinas mágicas de Hogwarts."
          precio="400$"
          urlImg={images.espreso}
          direccionFlex="row"
        />
        <Item
          title="Pizza de Jamón y Queso"
          Descripcion="Una pizza con jamón delicioso y queso fundido, preparada con un toque de magia de las cocinas de Hogwarts."
          precio="450$"
          urlImg={images.pizzaJamonQueso}
          direccionFlex="row-reverse"
        />
        <Item
          title="Pizza Hawaianas"
          Descripcion="Una pizza encantada con piña jugosa y jamón delicioso, digna de una fiesta en el Gran Comedor de Hogwarts."
          precio="500$"
          urlImg={images.pizzaHawaina}
          direccionFlex="row-reverse"
        />
        <Item
          title="Pizza Mixta"
          Descripcion="Una pizza mágica con una mezcla irresistible de ingredientes frescos, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="550$"
          urlImg={images.pizzaMixta}
          direccionFlex="row"
        />

        <Item
          title="Pizza de Salchicha"
          Descripcion="Una pizza irresistible con salchichas doradas y un toque mágico, perfecta para una cena en el Gran Comedor de Hogwarts."
          precio="400$"
          urlImg={images.pizzaSalchicha}
          direccionFlex="row"
        />
        <Item
          title="Pizza de Chorizo"
          Descripcion="Una pizza irresistible con chorizo jugoso y un toque mágico, perfecta para disfrutar una velada en el Gran Comedor de Hogwarts."
          precio="450$"
          urlImg={images.espreso}
          direccionFlex="row-reverse"
        />
        <Item
          title="Pizza de Camarones"
          Descripcion="Una pizza deliciosa con camarones frescos y un toque mágico de los mares, perfecta para una cena en el Gran Comedor de Hogwarts."
          precio="500$"
          urlImg={images.pizzaCamaron}
          direccionFlex="row-reverse"
        />

      </Seccion>
      <Seccion

        title={"Espaguetis"}
        urlImg={images.inicialEspagueti}
        urlImg2={images.footerEspagueti}
        background={imgFondoSpa}
        Frase="No hay bien y mal, solo hay poder y aquellos demasiado débiles para buscarlo"

      >
        <Item
          title="Espagueti Napolitano"
          Descripcion="Un plato digno de las cocinas mágicas de Hogwarts, que combina sabores exquisitos y un toque de encanto."
          precio="250$"
          urlImg={images.espreso}
          direccionFlex="row-reverse"
        />

        <Item
          title="Espagueti Doble Queso"
          Descripcion="Un plato mágico y cremoso, perfecto para una experiencia encantadora al estilo Hogwarts."
          precio="300$"
          urlImg={images.espreso}
          direccionFlex="row-reverse"
        />
        <Item
          title="Espagueti Jamón y Queso"
          Descripcion="Un plato encantador con sabores irresistibles, ideal para una cena mágica al estilo Hogwarts."
          precio="400$"
          urlImg={images.pizza}
          direccionFlex="row-reverse"
        />
        <Item
          title="Espagueti Hawaianas"
          Descripcion="Una pizza encantada con piña jugosa y jamón delicioso, digna de una fiesta en el Gran Comedor de Hogwarts."
          precio="450$"
          urlImg={images.pizza}
          direccionFlex="row-reverse"
        />
        <Item
          title="Expagueti Mixto"
          Descripcion="Un plato mágico que combina sabores exquisitos, perfecto para disfrutar una experiencia encantadora al estilo Hogwarts."
          precio="500$"
          urlImg={images.pizza}
          direccionFlex="row-reverse"
        />

        <Item
          title="Espagueti de Salchicha"
          Descripcion="Un plato encantador con salchichas jugosas, ideal para una experiencia mágica al estilo Hogwarts."
          precio="400$"
          urlImg={images.pizza}
          direccionFlex="row-reverse"
        />
        <Item
          title="Espagueti de Chorizo"
          Descripcion="Un plato mágico con chorizo jugoso, perfecto para disfrutar una experiencia encantadora al estilo Hogwarts."
          precio="450$"
          urlImg={images.espreso}
          direccionFlex="row-reverse"
        />
        <Item
          title="Espagueti de Camarones"
          Descripcion="Un plato mágico con camarones frescos y deliciosos, perfecto para disfrutar una cena encantadora al estilo Hogwarts."
          precio="550$"
          urlImg={images.pizza}
          direccionFlex="row-reverse"
        />


      </Seccion>
      <Seccion
        title="Batidos"
        urlImg={images.inicialBatido}
        urlImg2={images.footerBatido}
        Frase="No importa que seas una rata tonta, Weasley. La Gran Escalinata no distingue entre magos de sangre pura y traidores."
      >
        <Item
          title="Batido de Chocolate"
          Descripcion="Una bebida mágica y cremosa que te transportará a un dulce momento en el Gran Comedor de Hogwarts."
          precio="400$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"

        />
        <Item
          title="Batido de fresa"
          Descripcion="Una bebida mágica y refrescante, ideal para disfrutar un dulce momento en el Gran Comedor de Hogwarts."
          precio="450$"
          urlImg={images.batidoFresa}
          direccionFlex="column-reverse"
        />
        <Item
          title="Batido de vainilla "
          Descripcion="Una bebida mágica y suave, ideal para disfrutar un dulce momento en el Gran Comedor de Hogwarts."
          precio="450$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"

        />
        <Item
          title="Malta Condensada"
          Descripcion="Una bebida mágica y rica en sabor, perfecta para disfrutar un momento dulce en el Gran Comedor de Hogwarts."
          precio="550$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />
        <Item
          title="Frapé Hogwarts"
          Descripcion="Una bebida mágica que combina los sabores de chocolate, vainilla y fresa, perfecta para disfrutar un momento encantador en el Gran Comedor de Hogwarts."
          precio="500$"
          urlImg={images.espreso}
          direccionFlex="column-reverse"
        />

      </Seccion>
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
          urlImg={images.bombon}
          direccionFlex="row-reverse"
        />
      </Seccion>
      <Seccion
        title="Cócteles"
        urlImg={images.inicialCocteles}
        urlImg2={images.footerCoctel}
        Frase="Libros! ¡Y astucia! Hay cosas más importantes,amistad y valentía"
      >
        <Item
          title="Medusa Shot"
          Descripcion="Una bebida mágica y electrizante, que combina ingredientes cautivadores y misteriosos, perfecta para sorprender y deleitar en el Gran Comedor de Hogwarts."
          precio="750$"
          urlImg={images.coctelMedusaShot}
          direccionFlex="row-reverse"
        />
        <Item
          title="Toro Bravo"
          Descripcion="Una bebida mágica y poderosa, que combina el vigor del tequila con un toque enérgico de cítricos y especias, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="900$"
          urlImg={images.coctelToroBravo}
          direccionFlex="row"
        />


        <Item
          title="Margarita Tradicional"
          Descripcion="Una bebida mágica y refrescante, que combina el clásico sabor de la margarita con un toque encantador, perfecta para deleitarse en el Gran Comedor de Hogwarts."
          precio="750$"
          urlImg={images.coctelMargaritaTradicional}
          direccionFlex="row-reverse"
        />

        <Item
          title="Margarita Blue"
          Descripcion="Una bebida mágica y vibrante, que combina un refrescante toque azul con el clásico encanto de la margarita, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="650$"
          urlImg={images.coctelMargaritaBlue}
          direccionFlex="row"
        />
        <Item
          title="Mojito Cubano"
          Descripcion="Un cóctel mágico y refrescante, que combina la frescura de la menta y la lima con el encanto de Hogwarts, perfecto para disfrutar en el Gran Comedor."
          precio="550$"
          urlImg={images.coctelMojitoCubano}
          direccionFlex="row-reverse"
        />
        <Item
          title="Cuba Libre"
          Descripcion="Un cóctel mágico y clásico, que combina el sabor refrescante del ron y la cola con un toque de limón, perfecto para disfrutar en el Gran Comedor de Hogwarts."
          precio="500$"
          urlImg={images.coctelCubaLibre}
          direccionFlex="row"
        />
        <Item
          title="Gin Tonic"
          Descripcion="Un cóctel mágico y elegante, que combina la frescura del gin y la tónica con un toque encantador de Hogwarts, perfecto para disfrutar en el Gran Comedor."
          precio="700$"
          urlImg={images.coctelGinTonic}
          direccionFlex="row-reverse"
        />

        <Item
          title="Daiquiri Rebelde"
          Descripcion="Un cóctel mágico y audaz, que combina el sabor refrescante del ron y el limón con un toque rebelde al estilo de Hogwarts, perfecto para disfrutar en el Gran Comedor."
          precio="500$"
          urlImg={images.coctelDaiquiriRebelde}
          direccionFlex="row"
        />
        <Item
          title="Martini"
          Descripcion="Un cóctel mágico y sofisticado, que combina la elegancia del gin y el vermut con un toque encantador al estilo de Hogwarts, perfecto para disfrutar en el Gran Comedor."
          precio="600"
          urlImg={images.coctelMartini}
          direccionFlex="row-reverse"
        />
        <Item
          title="Michelada"
          Descripcion="Una bebida mágica y refrescante, que combina la cerveza, el jugo de limón y una mezcla de sabores picantes, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="750$"
          urlImg={images.coctelMichelada}
          direccionFlex="row"
        />
        <Item
          title="Chelada"
          Descripcion="Una bebida mágica y refrescante, que mezcla la frescura de la cerveza con el jugo de limón y un toque de sal, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="500$"
          urlImg={images.espreso}
          direccionFlex="row-reverse"
        />
        <Item
          title="Pantera Rosa"
          Descripcion="Una bebida mágica y seductora, que combina la suavidad de la crema y el licor de fresa con un toque encantador de Hogwarts, perfecta para disfrutar en el Gran Comedor."
          precio="600$"
          urlImg={images.coctelPanteraRosa}
          direccionFlex="row"
        />
        <Item
          title="Piña Colada"
          Descripcion="Una bebida mágica y tropical, que combina la dulzura de la piña y el coco con un toque encantador de Hogwarts, perfecta para disfrutar en el Gran Comedor."
          precio="750$"
          urlImg={images.coctelPinaColada}
          direccionFlex="row-reverse"
        />
        <Item
          title="Alenxander"
          Descripcion="Una bebida mágica y sofisticada, que combina la suavidad del brandy, la crema de cacao y la crema de leche, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="750$"
          urlImg={images.coctelAlenxander}
          direccionFlex="row"
        />

        <Item
          title="Grandfather"
          Descripcion="Una bebida mágica y reconfortante, que combina la riqueza del whisky escocés con un toque encantador de amaretto, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="550$"
          urlImg={images.coctelGrandFather}
          direccionFlex="row-reverse"
        />
        <Item
          title="Poción Multijugos"
          Descripcion="Una bebida mágica y transformadora, que combina ingredientes secretos para permitirte adoptar la apariencia de otra persona, perfecta para experimentar aventuras en el Gran Comedor de Hogwarts."
          precio="800"
          urlImg={images.coctelPosionMultijugos}
          direccionFlex="row"
        />
        <Item
          title="Blody Mary"
          Descripcion="Una bebida mágica y vibrante, que combina el jugo de tomate con un toque de vodka y especias encantadoras, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="600$"
          urlImg={images.coctelBlodyMary}
          direccionFlex="row-reverse"
        />

        <Item
          title="Orgasmo"
          Descripcion="Un sueve y cremoso trago, que como su nombre lo indica puede resultar muy placentero"
          precio="800$"
          urlImg={images.coctelOrgasmo}
          direccionFlex="row"
        />
        <Item
          title="Limonada Frapé"
          Descripcion="Una bebida mágica y refrescante, con un toque encantador de hielo frapé, perfecta para disfrutar en el Gran Comedor de Hogwarts."
          precio="320$"
          urlImg={images.coctelLimonadaFrape}
          direccionFlex="row-reverse"
        />
      </Seccion>
      <Seccion
        title="Bebidas"
        urlImg={images.inicialBebida}
        urlImg2={images.footerBebida}
        Frase=""
      >
        <Item
          title="Cerveza Cristal"
          Descripcion=""
          precio="300$"
          urlImg={images.bebidaCervezaCristal}
          direccionFlex="column-reverse"

        />
        <Item
          title="Cerveza Bucanero"
          Descripcion=""
          precio="280$"
          urlImg={images.bebidaCervezaBucanero}
          direccionFlex="column-reverse"
        />
        <Item
          title="Cerveza Widmill"
          Descripcion=""
          precio="250$"
          urlImg={images.bebidaCervezaWidmill}
          direccionFlex="column-reverse"

        />
        <Item
          title="Cerveza Cacique"
          Descripcion=""
          precio="240$"
          urlImg={images.bebidaCervezaCacique}
          direccionFlex="column-reverse"
        />
        <Item
          title="Cerveza Beck's"
          Descripcion=""
          precio="280$"
          urlImg={images.bebidaCervezaCacique}
          direccionFlex="column-reverse"
        />

        <Item
          title="Malta"
          Descripcion=""
          precio="300$"
          urlImg={images.bebidaMalta}
          direccionFlex="column-reverse"
        />
        <Item
          title="Jugo"
          Descripcion=""
          precio="230$"
          urlImg={images.bebidaJugo}
          direccionFlex="column-reverse"
        />
        <Item
          title="Refresco"
          Descripcion=""
          precio="250$"
          urlImg={images.bebidaRefresco}
          direccionFlex="column-reverse"
        />
        <Item
          title="Agua"
          Descripcion=""
          precio="250$"
          urlImg={images.bebidaAgua}
          direccionFlex="column-reverse"
        />


      </Seccion>





      <Footer />



    </div >
  );
}

export default App;
