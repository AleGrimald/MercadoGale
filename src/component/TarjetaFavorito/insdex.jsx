import './TarjetaFavorito.css';
import { useState, useEffect } from 'react';

const TarjetaFavorito = (props)=>{
    const {
        producto, 
        esFav, 
        alternarFavorito, 
        setCarro, 
        carrito, 
        imgFav, 
        titleFav, 
        precio, 
        cantidad: cantidadProp, 
        setCantidad: setCantidadProp,
    } = props;

    const [cantidad, setCantidad] = useState(cantidadProp);
    useEffect(() => { 
        setCantidadProp(cantidad); 
    }, [cantidad,setCantidadProp]);

    const eliminarFav = () => {
        alternarFavorito(producto);
        setCarro(carrito.filter(item => item.title !== producto.title));
    };

    const aumentarCantidad =()=>{
        if(cantidad<=100){
            setCantidad(cantidad+1);
        } 
    }

    const disminuirCantidad =()=>{
        if(cantidad>1){
            setCantidad(cantidad-1);
        }        
    }

    const precioTotal = precio * cantidad;

    return(
        <>
            <div className='contenedor_img_texto'>
                <img src={imgFav} alt={titleFav} className="tarjeta_img_fav" />
                <div className='contenedor_texto_fav'>
                    <h2 className='h2_fav'>{titleFav}</h2>
                    <p className='precio_fav'>${precioTotal.toFixed(2)}</p>
                    
                    <div className='contenedor_cant_btn'>
                        <input
                            value={cantidad}
                            className='cantidad_fav' 
                            type="text"
                            readOnly
                        />
                        <div className='contenedor_btn'>
                            <button className='botones_fav' onClick={aumentarCantidad}>+</button>
                            <button className='botones_fav' onClick={disminuirCantidad}>-</button>
                        </div>
                    </div>
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