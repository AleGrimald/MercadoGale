import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = (props) => {
    const {imgProd, titleProd, precio, condicion, link, carrito, setCarro, producto, esFav, alternarFavorito } = props;
    const cargarCarro = () => {
        alternarFavorito(producto);  // Llama a la función que maneja el estado de favorito

        if (esFav){
            setCarro(carrito.filter(item => item.title !== producto.title));
        } else{
            const datos = {
                thumbnail: producto.thumbnail,
                title: producto.title,
                price: producto.price
            };
            setCarro([...carrito, datos]);
        }
    };

    return (
        <>
            <img src={imgProd} alt={titleProd} className="tarjeta_img" />
            <img
                className='favorito'
                src={esFav ? 'favoritoOn.png' : 'corazon.svg'}
                alt={titleProd}
                onClick={cargarCarro}
            />
            <div className='contenedor_texto'>
                <h2 className='productos_h2'>{titleProd}</h2>
                <p className='condicion'>Condición: {condicion === "new" ? "Nuevo" : "Usado"}</p>
                <p className='precio'>${precio}</p>
                <a href={link} className='producto_link'>Ir a ML ↗</a>
            </div>
        </>
    );
};

export default TarjetaProducto;
