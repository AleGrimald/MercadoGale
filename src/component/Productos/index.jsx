import React, { useRef } from 'react';
import './Productos.css';

const Productos = (props) => {
    const { productos, setCarro, carrito, clase } = props;
    const imgRefs = useRef([]);

    const cargarCarro = (producto, index) => {
        const imgFav = imgRefs.current[index];
        if (imgFav) {
            const isFavorited = imgFav.src.includes('favoritoOn.png');
            imgFav.src = isFavorited ? 'corazon.svg' : 'favoritoOn.png';

            if (isFavorited) {
                // Remove from cart
                setCarro(carrito.filter(item => item.title !== producto.title));
            } else {
                // Add to cart
                const datos = {
                    thumbnail: producto.thumbnail,
                    title: producto.title,
                    price: producto.price
                };
                setCarro([...carrito, datos]);
            }
        }
    }

    return (
        <div className={clase} key={crypto.randomUUID}>
            {productos.map((producto, index) => (
                <div key={producto.id} className="tarjeta">
                    <img src={producto.thumbnail} alt={producto.title} className="tarjeta_img" />
                    <img
                        ref={el => imgRefs.current[index] = el}
                        className='favorito'
                        src='corazon.svg'
                        alt={producto.title}
                        onClick={() => cargarCarro(producto, index)}
                    />
                    <div className='contenedor_texto'>
                        <h2 className='productos_h2'>{producto.title}</h2>
                        <p className='precio'>${producto.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Productos;
