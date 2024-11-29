import './Propagandas.css';

const Propagandas = (props) => {
  const { propagandas } = props;

  return (
    <div className="propaganda">
      <a href={propagandas.enlace}>
        <img src={propagandas.imagen} alt={propagandas.descripcion} />
      </a>
      <p>{propagandas.descripcion}</p>
    </div>
  );
};

export default Propagandas;
