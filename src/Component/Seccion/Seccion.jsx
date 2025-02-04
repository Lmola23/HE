import './Section.css';
import './../../styles/fonts.css';
import lineImg from './../../assets/rallaFooter.png';
export default function Seccion({ title, urlImg, urlImg2, Frase, children, background = "" }) {
  return (

    <>
      <div className='containerInicial' id={title} translate='no'>
        <img className='imgInicial' src={urlImg} alt="" />
        <h1 style={{ fontFamily: "harryPotterFont", fontSize: 50, }}>{title}</h1>
      </div>
      <div className="seccion" style={{ backgroundImage: background ? `url(${background})` : "none", }}>
        {children}
      </div >
      <div className='containerFooter'>
        <img className='imgFooter' src={urlImg2} alt="Sección footer" />
        <p style={{ fontFamily: "harryPotterFont", fontSize: 30, marginRight: 20, marginLeft: 20, lineHeight: 1 }}>{Frase}</p>
      </div>
      <div className='lineFooter'>
        <img className='imgline' src={lineImg} alt="" />
      </div>
    </>
  );
}
