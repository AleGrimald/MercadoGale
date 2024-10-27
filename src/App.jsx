import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Productos from './component/Productos';
import Header from './component/Header';
import Carrito from './component/Carrito';

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("pokemon");
  const [btnCarro, setBtnCarro] = useState(false);

  useEffect(() => {
      axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
          .then(response => setProductos(response.data.results))
          .catch(error => console.error('Error:', error));
  },[busqueda]);

  return (
    <div className="App">
      <Header setBusqueda={setBusqueda} setBtnCarro={setBtnCarro} btnCarro={btnCarro} />
      {
        btnCarro
        ?<Carrito datos={carrito}/>
        :<Productos productos={productos} setCarro={setCarrito} carrito={carrito}/>
      }
    </div>
  );
}

export default App;
