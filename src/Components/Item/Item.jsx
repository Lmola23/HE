import './Item.css';
import './../../styles/fonts.css';

export default function Item({ title, Descripcion, precio, urlImg, direccionFlex = "row", scaleImage = 1, disponible = true }) {
  return (
    <div className={`containerItem ${disponible ? '' : 'agotado'}`} style={{ flexDirection: direccionFlex, fontFamily: "harryPotterFont" }}>
      {!disponible && <div className="agotadoOverlay">Agotado</div>}
      <div className="descripContainer">
        <h1 className="titleItem" translate='no'>{title}</h1>
        <p className="descripItem">{Descripcion}</p>
        <p className="precioItem">{precio}</p>
      </div>
      <div className="ImgItemContainer" style={{ scale: scaleImage }}>
        <img className='ImgItem' src={urlImg}  />
      </div>
    </div>
  );
}
