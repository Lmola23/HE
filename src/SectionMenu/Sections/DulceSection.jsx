import Item from './../../Components/Item/Item.jsx';
import Seccion from './../../Components/Seccion/Seccion.jsx';
import images from './../../Utils/ImagesDulce.js';
import FadeInSection from './../../Components/FadeInSection/FadeInSection.jsx';

export default function DulceSection() {
    return (
        <Seccion
            title="Dulces"
            urlImg={images.inicialDulce}
            urlImg2={images.footerDulce}
            Frase="Tengo una idea mejor. ¡Gastémoslo todo en dulces!"
        >
            <FadeInSection>
                <Item
                    title="Flan de Leche"
                    Descripcion="Un hechizo de energía en cada sorbo. Déjate revitalizar por su intensidad."
                    precio="450$"
                    urlImg={images.dulceFlanLeche}
                    direccionFlex="column-reverse"
                />
            </FadeInSection>
            
            <FadeInSection>
                <Item
                    title="Ensalada Fria"
                    Descripcion="Refrescante y deliciosa, preparada con el toque mágico de los elfos domésticos."
                    precio="550$"
                    urlImg={images.dulce}
                    direccionFlex="column-reverse"
                    disponible={false}
                />
            </FadeInSection>
        </Seccion>
    );
}