import FotterMenu from './../../assets/FooterMenu.png';
import About from '../About/About.jsx';
import './Footer.css';
import './../../styles/fonts.css';
export default function Footer() {
  return (
    <>
      <div className='containerFooter'>

        <div className="containerFooterImg">
          <img className="FooterImg" src={FotterMenu} alt="" />
        </div>
        <div className='DespedidaFooter'>
          <p className='textDespedidaFooter' style={{ fontFamily: "harryPotterFont" }}>"Gracias por Visitarnos"Esperamos que tu esperiencia en nuestro rincón sea mágico haya sido tan encantadora como un hechizo de felicidad.Vuelve pronto para más aventuras culinarias y encantamientos deliciosos ! Tu magia hace de este lugar algo espaecial"</p>
        </div>
        <div className='about'>
          <About />
        </div>
      </div>

    </>


  );

}
