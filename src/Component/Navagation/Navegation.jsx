import React, { useState, useRef, useEffect } from "react";
import "./Navegation.css";
import './../../styles/fonts.css';

function Navegacion() {
  const [arrastrando, setArrastrando] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState(0);
  const inicioX = useRef(0);
  const traduccionActualX = useRef(0);
  const traduccionPreviaX = useRef(0);
  const referenciaMenu = useRef(null);

  const elementos = [
    "Cafés",
    "Dulces",
    "Hamburguesas",
    "Sandwich",
    "HotDog",
  ];

  const elementosVisibles = 4;
  const anchoElemento = 160;
  const espacio = 20;
  const anchoContenedor = anchoElemento * elementosVisibles + espacio * (elementosVisibles - 1);
  const anchoTotal = anchoElemento * elementos.length + espacio * (elementos.length - 1);
  const maximoTraduccionX = 0;
  const minimoTraduccionX = -((anchoTotal + 120) - anchoContenedor);

  useEffect(() => {
    if (referenciaMenu.current) {
      referenciaMenu.current.style.transform = `translateX(${maximoTraduccionX}px)`;
    }
    traduccionActualX.current = maximoTraduccionX;
    traduccionPreviaX.current = maximoTraduccionX;
  }, []);

  const manejarTactoAbajo = (e) => {
    setArrastrando(true);
    inicioX.current = e.touches[0].clientX;
    referenciaMenu.current.style.transition = "none";
  };

  const manejarMovimientoTacto = (e) => {
    if (!arrastrando) return;

    const deltaX = e.touches[0].clientX - inicioX.current;
    traduccionActualX.current = traduccionPreviaX.current + deltaX;

    if (traduccionActualX.current > maximoTraduccionX) {
      traduccionActualX.current = maximoTraduccionX;
    } else if (traduccionActualX.current < minimoTraduccionX) {
      traduccionActualX.current = minimoTraduccionX;
    }

    referenciaMenu.current.style.transform = `translateX(${traduccionActualX.current}px)`;
  };

  const manejarTactoArriba = () => {
    if (!arrastrando) return;

    setArrastrando(false);
    traduccionPreviaX.current = traduccionActualX.current;
    referenciaMenu.current.style.transition = "transform 0.3s ease";
  };

  const manejarTactoSale = () => {
    if (arrastrando) manejarTactoArriba();
  };

  const manejarClickElemento = (indice) => {
    setSeccionActiva(indice); // Cambia la sección activa

    // Desplazar a la sección correspondiente
    const seccion = document.getElementById(elementos[indice]);
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="slider-menu">
      <div
        className="menu-container"
        style={{ width: `${anchoContenedor}px` }}
        onTouchStart={manejarTactoAbajo}
        onTouchMove={manejarMovimientoTacto}
        onTouchEnd={manejarTactoArriba}
        onTouchCancel={manejarTactoSale}
      >
        <div className="menu" ref={referenciaMenu}>
          {elementos.map((elemento, indice) => (
            <div
              key={indice}
              className={`menu-item ${indice === seccionActiva ? "active" : ""}`}
              style={{ marginRight: `${espacio}px`, fontFamily: "harryPotterFont" }}
              onClick={() => manejarClickElemento(indice)}
            >
              {elemento}
              {indice === seccionActiva && <div className="active-indicator"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navegacion;

