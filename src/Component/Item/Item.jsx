import './Item.css';
import './../../styles/fonts.css';

export default function Item({ title, Descripcion, precio, urlImg, direccionFlex = "row" }) {
  return (
    <>
      <div className="containerItem" style={{ flexDirection: direccionFlex, fontFamily: "harryPotterFont" }}>
        <div className="descripContainer">
          <h1 className="titleItem" >{title}</h1>
          <p className="descripItem" >{Descripcion}</p>
          <p className="precioItem">{precio}</p>
        </div>
        <div className="ImgItemContainer">
          <img className='ImgItem' src={urlImg} alt="" />
        </div>
      </div>
    </>
  );
}

