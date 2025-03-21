import React, { useState, useRef, useEffect } from "react";
import "./Navegation.css";
import "./../../styles/fonts.css";

function Navegacion() {
  const [arrastrando, setArrastrando] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const inicioX = useRef(0);
  const traduccionActualX = useRef(0);
  const traduccionPreviaX = useRef(0);
  const referenciaMenu = useRef(null);
  const referenciaNavegacion = useRef(null);

  const elementos = ["Cafés", "Dulces", "Hamburguesas", "Sandwich", "HotDog", "Entrantes", "Pizzas", "Espaguetis", "Batidos", "Malteadas", "Bebidas"];

  const elementosVisibles = 4;
  const anchoElemento = 160;
  const espacio = 20;
  const anchoContenedor = anchoElemento * elementosVisibles + espacio * (elementosVisibles - 1);
  const anchoTotal = anchoElemento * elementos.length + espacio * (elementos.length - 1);
  const maximoTraduccionX = 0;
  const minimoTraduccionX = -(anchoTotal - anchoContenedor);

  useEffect(() => {
    if (referenciaMenu.current) {
      referenciaMenu.current.style.transform = `translateX(${maximoTraduccionX}px)`;
    }
    traduccionActualX.current = maximoTraduccionX;
    traduccionPreviaX.current = maximoTraduccionX;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const indice = elementos.indexOf(id);
            if (indice !== -1) {
              setSeccionActiva(indice);

              // Translada el menú para que la sección activa quede centrada
              const nuevaTraduccionX = -(indice * (anchoElemento + espacio)) + anchoContenedor / 2 - anchoElemento / 2;
              traduccionActualX.current = Math.min(maximoTraduccionX, Math.max(minimoTraduccionX, nuevaTraduccionX));
              if (referenciaMenu.current) {
                referenciaMenu.current.style.transform = `translateX(${traduccionActualX.current}px)`;
              }
            }
          }
        });
      },
      { threshold: 0.6 } // El 60% de la sección debe estar visible para considerarla activa
    );

    elementos.forEach((id) => {
      const seccion = document.getElementById(id);
      if (seccion) {
        observer.observe(seccion);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (referenciaNavegacion.current) {
      observer.observe(referenciaNavegacion.current);
    }

    return () => observer.disconnect();
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
    setSeccionActiva(indice);
    const seccion = document.getElementById(elementos[indice]);
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Menú original para el observer */}
      <div ref={referenciaNavegacion} className="menu-placeholder">
        <div className="menu-container" style={{ width: "100%" }}>
          <div className="menu">
            {elementos.map((elemento, indice) => (
              <div key={indice} className="menu-item">
                {elemento}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menú que se fija al hacer scroll */}
      <div className={`slider-menu ${isSticky ? "sticky-menu" : ""}`} style={{ width: "100%", position: "sticky", top: 0, zIndex: 10 }}>
        <div
          className="menu-container"
          style={{ width: `${anchoContenedor}px` }}
          onTouchStart={manejarTactoAbajo}
          onTouchMove={manejarMovimientoTacto}
          onTouchEnd={manejarTactoArriba}
          onTouchCancel={manejarTactoSale}
        >
          <div className="menu" ref={referenciaMenu} style={{ width: "100%" }}>
            {elementos.map((elemento, indice) => (
              <div translate="no"
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
    </>
  );
}

export default Navegacion;