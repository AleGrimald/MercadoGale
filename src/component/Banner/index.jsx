import './Banner.css';

const Banner = (props)=>{
    const {imagenesBanner,imagenAgrandada,setImagenAgrandada,setBusqueda,setBtnFavorito,setProductosVisibles} = props;

    const buscar = async (nombre)=>{
        await setBusqueda(nombre);
        await setBtnFavorito({contenido:"Favoritos",valor:false});
        setProductosVisibles(10);

        const tarjeta = document.querySelector(".tarjeta");
        if(tarjeta){
            tarjeta.scrollIntoView({ behavior: 'smooth'});
        }
    }
    return<div className="banner_carousel">
        {
            imagenesBanner.map((src, index) => (<div
                    key={index}
                    className={`banner_image_container ${imagenAgrandada === index ? 'banner_img_expanded' : ''}`}
                    onMouseOver={() => setImagenAgrandada(index)}
                    onMouseOut={() => setImagenAgrandada(null)}
                    onClick={()=> buscar(src.nombre)}
                >
                <h3 className='nombre'>{src.nombre}</h3>
                <img className="banner_image" src={src.link} alt={`Imagen ${index + 1}`} />
            </div>
        ))}
    </div>
}

export default Banner;
