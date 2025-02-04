import './Item.css';
import './../../styles/fonts.css';

export default function Item({ title, Descripcion, precio, urlImg, direccionFlex = "row", scaleImage = 1 }) {
  return (
    <>
      <div className="containerItem" style={{ flexDirection: direccionFlex, fontFamily: "harryPotterFont" }}>
        <div className="descripContainer">
          <h1 className="titleItem" translate='no' >{title}</h1>
          <p className="descripItem" >{Descripcion}</p>
          <p className="precioItem">{precio}</p>
        </div>
        <div className="ImgItemContainer" style={{ scale: scaleImage }}>
          <img className='ImgItem' src={urlImg} alt="" />
        </div>
      </div>
    </>
  );
}

