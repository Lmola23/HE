import Item from './../../Components/Item/Item.jsx';
import Seccion from './../../Components/Seccion/Seccion.jsx';
import images from './../../Utils/ImagesPizzas.js';


export default function PizzasSection() {
      
return(
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
      urlImg={images.pizzaNapolitana}
      direccionFlex="row"
    />

    <Item
      title="Pizza de Doble Queso"
      Descripcion="Una pizza con una doble capa de queso derretido, tan deliciosa que parece salida de las cocinas mágicas de Hogwarts."
      precio="400$"
      urlImg={images.pizzaDobleQueso}
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
      title="Pizza Mixta"
      Descripcion="Una pizza mágica con una mezcla irresistible de ingredientes frescos, perfecta para disfrutar en el Gran Comedor de Hogwarts."
      precio="550$"
      urlImg={images.pizzaMixta}
      direccionFlex="row-reverse"
    />
    <Item
      title="Pizza Hawaianas"
      Descripcion="Una pizza encantada con piña jugosa y jamón delicioso, digna de una fiesta en el Gran Comedor de Hogwarts."
      precio="500$"
      urlImg={images.pizzaHawaina}
      direccionFlex="row"
    />


    <Item
      title="Pizza de Salchicha"
      Descripcion="Una pizza irresistible con salchichas doradas y un toque mágico, perfecta para una cena en el Gran Comedor de Hogwarts."
      precio="450$"
      urlImg={images.pizzaSalchicha}
      direccionFlex="row"
    />
    <Item
      title="Pizza de Chorizo"
      Descripcion="Una pizza irresistible con chorizo jugoso y un toque mágico, perfecta para disfrutar una velada en el Gran Comedor de Hogwarts."
      precio="450$"
      urlImg={images.pizzaChorizo}
      direccionFlex="row-reverse"
    />
    <Item
      title="Pizza de Camarones"
      Descripcion="Una pizza deliciosa con camarones frescos y un toque mágico de los mares, perfecta para una cena en el Gran Comedor de Hogwarts."
      precio="600$"
      urlImg={images.pizzaCamaron}
      direccionFlex="row-reverse"
    />

  </Seccion>
);


    
}