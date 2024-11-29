//import Redes from '../Redes';
import './Footer.css'
import Redes from '../Redes';

const Footer =(props)=>{
    const {datosFooter}=props;

    return <footer className='footer'>
        <section className='footer_logo'>
            <img src='./logoies.png' alt=''/>
            <h2>IES Tafi Viejo - Ext Yerba Buena</h2>  
        </section>
        <ul className='footer_lista'>
            <h4>Tecnicatura en Desarrollo de Software</h4>
            <li>Direccion: Avenida Peron 2600 - Yerba Buena</li>
            <li>Telefono: 381-549-2321</li>
            <br />
            <div className='dev'>
                <h4>Dev: Grimaldi Oscar Alejandro</h4>
                <div className='dev_img'>
                    <a href="https://github.com/AleGrimald"><img src="./githubBlack.svg" alt=""/></a>
                    <a href="https://www.linkedin.com/in/alejandro-grimaldi-828868262/"><img src='./linkedin.svg' alt=""/></a>
                </div>
                
            </div>
            
        </ul>
        {
            datosFooter.map((dato, index)=>
                <div className="redes_footer" key={index}>
                    <Redes
                        elementWpFb={dato.elementWpFb}
                        intersectadoWpFb={dato.intersectadoWpFb}
                        animacion={dato.animacion}
                        animacion2={dato.animacion2}
                    />
                </div>
                
            )
        }
        
        
    </footer>
}
export default Footer;