import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


import Productos from './component/Productos';
import Header from './component/Header';
import Carrito from './component/Carrito';
import Carrusel from './component/Carrusel'
import Banner from './component/Banner'

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("pokemon");
  const [btnCarro, setBtnCarro] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagenAgrandada, setImagenAgrandada] = useState(null);

  useEffect(() => {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
      .then(response =>setProductos(response.data.results))          
      .catch(error => console.error('Error:', error));
  },[busqueda]);

  const imagenes = [
    'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HELg?q=90&o=f&w=480&h=270',
    'https://wallpapers.com/images/hd/black-mountain-bike-near-river-9qo42hcz12q9z3u4.jpg',
    'https://t3.ftcdn.net/jpg/05/70/06/64/360_F_570066449_SS8sx5K4ZsYXCcXvR014q2prysMs1kf2.jpg'
  ];

  const imagenesBanner = [
    {
      nombre:"Gamer",
      link:'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HELg?q=90&o=f&w=480&h=270'
    },
    {
      nombre:"Ciclismo",
      link:'https://wallpapers.com/images/hd/black-mountain-bike-near-river-9qo42hcz12q9z3u4.jpg'
    },
    {
      nombre:"Basket",
      link:'https://t3.ftcdn.net/jpg/05/70/06/64/360_F_570066449_SS8sx5K4ZsYXCcXvR014q2prysMs1kf2.jpg'
    },
    {
      nombre:"Farmacia",
      link:'https://www.shutterstock.com/image-photo/pharmacist-holding-mobile-phone-using-260nw-2280677681.jpg'
    },
    {
      nombre:"Bebes",
      link:'https://www.telemundo.com/sites/nbcutelemundo/files/images/promo/article/2017/10/24/bebe-con-ropa-y-otros-objetos.jpg',
    },
    {
      nombre:"Mascotas",
      link:'https://www.hola.com/horizon/landscape/ed395d315450-gato-perro-t.jpg?im=Resize=(640),type=downsize'
    },
  ];

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
      }, 4000); // Cambia cada 3 segundos

      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [imagenes.length]);

  return (
    <div className="App">
      <Header setBusqueda={setBusqueda} setBtnCarro={setBtnCarro} btnCarro={btnCarro} />
      <Banner imagenesBanner={imagenesBanner} imagenAgrandada={imagenAgrandada} setImagenAgrandada={setImagenAgrandada} setBusqueda={setBusqueda}/>

      <main className='main'>
        {
          btnCarro
          ?<Carrito datos={carrito}/>
          :<Productos clase="contenedor_tarjetas" productos={productos} setCarro={setCarrito} carrito={carrito}/>
        }
        <Carrusel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} imagenes={imagenes}/>
      </main>
      
    </div>
  );
}

export default App;
