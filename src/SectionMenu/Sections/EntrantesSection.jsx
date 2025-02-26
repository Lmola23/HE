import React from 'react';
import Item from './../../Components/Item/Item.jsx';
import Seccion from './../../Components/Seccion/Seccion.jsx';
import images from './../../Utils/ImagesEntrantes.js';
import FadeInSection from './../../Components/FadeInSection/FadeInSection.jsx';

export default function EntrantesSection() {
    return (
        <Seccion
            title="Entrantes"
            urlImg={images.inicialEntrante}
            urlImg2={images.footerEntrante}
            Frase=" ¿Por qué no seguimos las arañas? ¿Por qué no podemos seguir las mariposas?"
        >
            <FadeInSection>
                <Item
                    title="Croquetas Tradicionales"
                    Descripcion="Crujientes por fuera y cremosas por dentro, con un toque hechizado."
                    precio="500$"
                    urlImg={images.entranteCroqueta}
                    direccionFlex="row-reverse"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Entremes de Jamón y Queso"
                    Descripcion="Finísimas lonchas de jamón y queso, perfectas para disfrutar en el Gran Comedor de Hogwarts."
                    precio="1000$"
                    urlImg={images.entranteEntreme}
                    direccionFlex="row-reverse"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Tostones Rellenos de Jamón y Queso"
                    Descripcion="Crujientes tostones rellenos de jamón y queso fundido, con un toque de magia."
                    precio="800$"
                    urlImg={images.entranteTostonJamonQueso}
                    direccionFlex="row"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Tostones Rellenos de Camarón"
                    Descripcion="Crujientes tostones rellenos de camarón fresco, con un toque de magia marina."
                    precio="1200$"
                    urlImg={images.entranteTostonCamaron}
                    direccionFlex="row"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Tostones Rellenos de Pulpo"
                    Descripcion="Crujientes tostones rellenos de pulpo tierno, sazonados con un toque de magia marina, directos desde la cocina de las sirenas de Hogwarts."
                    precio="1000$"
                    urlImg={images.entranteTostonPulpo}
                    direccionFlex="row-reverse"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Chorizo al Cabón"
                    Descripcion="Jugoso chorizo asado al carbón, con un toque mágico de Hogwarts."
                    precio="500$"
                    urlImg={images.entrante}
                    direccionFlex="column-reverse"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Brochetas Hawaianas"
                    Descripcion="Jugosos trozos de carne, piña, jamón y queso, asados con un toque mágico."
                    precio="800$"
                    urlImg={images.entranteBrocheta}
                    direccionFlex="row"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Rollitos de Jamón y Queso"
                    Descripcion="Delicados rollitos de jamón y queso, envueltos en un hechizo delicioso que te transportará al Gran Comedor de Hogwarts."
                    precio="1500$"
                    urlImg={images.entranteRolloJamonQueso}
                    direccionFlex="row"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Nuggets de Pollo"
                    Descripcion="¡Crujientes por fuera, jugosos por dentro y con un toque mágico de Hogwarts!"
                    precio="800$"
                    urlImg={images.entrante}
                    direccionFlex="column-reverse"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Papas Bravas"
                    Descripcion="Un plato mágico y picante, que combina la crujiente textura de las papas con una salsa encantadora y audaz, perfecto para disfrutar en el Gran Comedor de Hogwarts."
                    precio="800$"
                    urlImg={images.entrante}
                    direccionFlex="column-reverse"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Chicharrita"
                    Descripcion="Combina la crujiente textura de las rodajas finas de burro frito con un toque encantador de sal y especias, perfecto para disfrutar en el Gran Comedor de Hogwarts."
                    precio="250$"
                    urlImg={images.entrante}
                    direccionFlex="column-reverse"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Salchipapas"
                    Descripcion="Crujientes papas fritas con trozos de salchicha dorada, bañadas en un hechizo de sabor que te hará sentir como en una fiesta de Hogwarts."
                    precio="1000$"
                    urlImg={images.entranteSalchipapa}
                    direccionFlex="column-reverse"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Surtido Tropical"
                    Descripcion="Un festín mágico con croquetas, jamón, queso, galletas saladas y crujientes tostones."
                    precio="1800$"
                    urlImg={images.entranteSurtidoTropical}
                    direccionFlex="column-reverse"
                />
            </FadeInSection>

            <FadeInSection>
                <Item
                    title="Completa de la Casa"
                    Descripcion="Un banquete digno de Hogwarts con brochetas hechizadas, tostones rellenos, jamón, queso, croquetas mágicas y crujientes galletas saladas."
                    precio="2800$"
                    urlImg={images.entrante}
                    direccionFlex="column-reverse"
                />
            </FadeInSection>
        </Seccion>
    );
}