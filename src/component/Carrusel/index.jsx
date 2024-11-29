import './Carrusel.css';

const Carrusel = (props) => {
    const {currentIndex, setCurrentIndex, ofertas}=props
    
    const imgSiguiente = () => {
        setCurrentIndex((currentIndex + 1) % ofertas.length);
    };

    const imgAnterior = () => {
        setCurrentIndex((currentIndex - 1 + ofertas.length) % ofertas.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {
                    ofertas.map(prod => ( <div className="carousel-item" key={prod.id}>
                        <img className='carousel_img' src={prod.thumbnail} alt={prod.title} />
                        <p className='carrucel_precio'>$ { prod.price}</p>
                    </div> ))
                } </div> 
            <div className="carousel-buttons">
                <button onClick={imgAnterior}>❮</button>
                <button onClick={imgSiguiente}>❯</button>
            </div> 
        </div>
    );
};

export default Carrusel;

