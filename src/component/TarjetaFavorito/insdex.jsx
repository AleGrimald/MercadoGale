import './TarjetaFavorito.css';

const TarjetaFavorito = (props)=>{
    const {producto, esFav, alternarFavorito, setCarro, carrito, imgFav, titleFav, precio} = props;

    const eliminarFav = () => {
        alternarFavorito(producto);
        setCarro(carrito.filter(item => item.title !== producto.title));
    };

    return(
        <>
            <div className='contenedor_img_texto'>
                <img src={imgFav} alt={titleFav} className="tarjeta_img_fav" />
                <div className='contenedor_texto_fav'>
                    <h2 className='h2_fav'>{titleFav}</h2>
                    <p className='precio_fav'>${precio}</p>
                </div>
            </div>

            <div className='contenedor_fav_carrito_num'>
                <img
                    className='corazon_fav'
                    src={esFav ? 'favoritoOn.png' : 'corazon.svg'}
                    alt={titleFav}
                    onClick={eliminarFav}
                />

                <div className='contenedor_carrito_num'>
                    <input className='cantidad_fav' type="number" min={1}/>
                    <img 
                        className='carrito_fav'
                        src={'carrito.svg'}
                        alt={titleFav}
                        onClick={eliminarFav}
                    />
                </div>
            </div>
            

            

            
            
            
        </>
    );
}

export default TarjetaFavorito;