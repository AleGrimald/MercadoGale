import './Redes.css'

const Redes = (props) =>{
    const {intersectadoWpFb,elementWpFb,animacion,animacion2}=props;
    return <>
        <h3 className='redes_h3'>
            Compartir en<br/> redes sociales
        </h3>
        <div className='redes_link'>
            <a className='fb' href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsemana-ies-tv.netlify.app&amp;title=Legislaci%C3%B3n>">
                <img 
                    src="./facebook.svg" 
                    alt="logotipo de facebook"
                    ref={elementWpFb}
                    style={{animation: intersectadoWpFb?animacion:<></>,
                    borderRadius: "50%"}}
                />
            </a>

            <a  href="https://api.whatsapp.com/send?text=Aprende sobre delitos infolrmaticos en semana-ies-tv.netlify.app">
                <img 
                    src="./whatsapp.svg" 
                    alt="logotipo de whatsapp"
                    ref={elementWpFb}
                    style={{animation: intersectadoWpFb?animacion2:<></>,
                    borderRadius: "50%"}}
                />
            </a>
        </div>
    </>
}

export default Redes;