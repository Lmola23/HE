import './Header.css';
import imgPrensent from '../../assets/presentacionHowarstExppress.png';
import './../../styles/fonts.css';
export default function Header() {
  return (
    <>
      <div className='container'>
        <img className='imgPrensentacion' src={imgPrensent} alt="" />
      </div>
      <h1 className='textInicial' style={{ fontFamily: "harryPotterFont", fontWeight: "normal" }}>Bienvendidos</h1>
      <h2 className='h2Present' style={{ fontFamily: "harryPotterFont" }}>DESCUBRE LOS SABORES MÁGICOS</h2>

    </>
  );
}
