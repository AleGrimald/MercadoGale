import './Productos.css';

const Productos = (props) => {
    const {productos, setCarro, carrito} = props;

    const cargarCarro=(producto)=>{
        const datos={
            thumbnail: producto.thumbnail,
            title: producto.title,
            price: producto.price
        }
        setCarro([...carrito, datos]);
    }


    return (
        <div className='contenedor_tarjetas'>
            {productos.map((producto, index) => (
                <div key={index} className="tarjeta">
                    <img src={producto.thumbnail} alt={producto.title} className="tarjeta_img" />
                    <div className='contenedor_texto'>
                        <h2>{producto.title}</h2>
                        <div className='contenedor_carrito'>
                            <p className='precio'>${producto.price}</p>
                            <img className='carrito' src='carrito.png' alt={producto.title} onClick={()=>cargarCarro(producto)}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Productos;