import './Carrusel.css';

const Carrusel = (props) => {
    const {currentIndex, setCurrentIndex, imagenes}=props
    
    const imgSiguiente = () => {
        setCurrentIndex((currentIndex + 1) % imagenes.length);
    };

    const imgAnterior = () => {
        setCurrentIndex((currentIndex - 1 + imagenes.length) % imagenes.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {imagenes.map((image, index) => (
                    <img key={index} src={image} alt={`Imagen ${index + 1}`} />
                ))}
            </div>
            <div className="carousel-buttons">
                <button onClick={imgAnterior}>❮</button>
                <button onClick={imgSiguiente}>❯</button>
            </div>
        </div>
    );
};

export default Carrusel;

