import './App.css';
import { useState, useEffect} from 'react';
import useIntersection from './useIntersection';
import axios from 'axios';
import TarjetaProducto from './component/TarjetaProducto';
import TarjetaFavorito from './component/TarjetaFavorito/insdex';
import Header from './component/Header';
import Carrusel from './component/Carrusel'
import Banner from './component/Banner'
import Propagandas from './component/Propagandas';
import { BarraNavegacion } from './component/BarraNavegacion';
import Footer from './component/Footer'

function App() {
  //-----------------------------useState

  const [productos, setProductos] = useState([]);
  const [productosVisibles, setProductosVisibles] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [favoritos, setFavoritos] = useState({});
  const [btnFavorito, setBtnFavorito] = useState({contenido:"Favoritos",valor:false});
  const [busqueda, setBusqueda] = useState("$pokemon");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagenAgrandada, setImagenAgrandada] = useState(null);
  const [ofertas, setOfertas] = useState([]);
  const [cantidades, setCantidades] = useState({});

  //-----------------------------custom Hooks
  const thresholdValor=0;
  const [elementWpFbFooter, intersectadoWpFbFooter]= useIntersection({threshold: thresholdValor,});
  const [elementSpan, intersectadoSpan]= useIntersection({threshold: .5,});

  //-----------------------------funciones

  const alternarFavorito = (producto) => {
    const esFavorito = favoritos[producto.title];
    const nuevoFavoritos = { ...favoritos, [producto.title]: !esFavorito };
    setFavoritos(nuevoFavoritos);
  };

  const actualizarCantidad = (id, nuevaCantidad) => { 
    setCantidades(prev => ({ ...prev, [id]: nuevaCantidad }));
  };
  
  //-----------------------------objetos Datos
  const imagenesBanner = [
    { nombre: "Gamer", link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HELg?q=90&o=f&w=480&h=270' },
    { nombre: "Ciclismo", link: 'https://wallpapers.com/images/hd/black-mountain-bike-near-river-9qo42hcz12q9z3u4.jpg' },
    { nombre: "Basket", link: 'https://t3.ftcdn.net/jpg/05/70/06/64/360_F_570066449_SS8sx5K4ZsYXCcXvR014q2prysMs1kf2.jpg' },
    { nombre: "Farmacia", link: 'https://www.shutterstock.com/image-photo/pharmacist-holding-mobile-phone-using-260nw-2280677681.jpg' },
    { nombre: "Bebes", link: 'https://www.telemundo.com/sites/nbcutelemundo/files/images/promo/article/2017/10/24/bebe-con-ropa-y-otros-objetos.jpg' },
    { nombre: "Mascotas", link: 'https://www.hola.com/horizon/landscape/ed395d315450-gato-perro-t.jpg?im=Resize=(640),type=downsize' }
  ];

  const propagandas = [
    {
      imagen: 'https://www.mdirector.com/wp-content/uploads/2017/07/gifs-animados-emociones.gif',
      enlace: 'https://www.mercadolibre.com.ar/ofertas',
      descripcion: '¡Aprovecha las ofertas exclusivas en Mercado Libre!'
    },
    {
      imagen: 'https://i.gifer.com/JQHA.gif',
      enlace: 'https://www.mercadolibre.com.ar/categorias',
      descripcion: 'Explora las categorías de productos en Mercado Libre.'
    },
    {
      imagen: 'https://i.makeagif.com/media/3-28-2021/Qj6V2X.gif',
      enlace: 'https://www.mercadolibre.com.ar/',
      descripcion: 'Descubre lo mejor de Mercado Libre.'
    }
  ];

  const datosFooter=[
    {
      elementWpFb:elementWpFbFooter,
      intersectadoWpFb:intersectadoWpFbFooter,
      animacion:"facebook 2.2s ease-in infinite",
      animacion2:"whatsapp 2.2s ease-in infinite",
    }
  ];

  //-----------------------------useEffect

  useEffect(() => {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=ofertas`)
      .then(response => setOfertas(response.data.results))
      .catch(error => console.log("Error: ", error))
  }, []);

  useEffect(() => {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
      .then(response => setProductos(response.data.results))
      .catch(error => console.error('Error:', error));
  }, [busqueda]);

  useEffect(() => { 
    if (intersectadoSpan)
    { 
      setProductosVisibles(prevProductosVisibles => prevProductosVisibles + 10); 
    } 
  }, [intersectadoSpan]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 40);
    }, 4500);

    return () => clearInterval(interval);
  }, [ofertas.length]);

  return (
    <div className="App">
      <Header 
        setBusqueda={setBusqueda} 
        setProductosVisibles={setProductosVisibles} 
        setBtnFavorito={setBtnFavorito}
      />

      <Banner 
        imagenesBanner={imagenesBanner} 
        imagenAgrandada={imagenAgrandada} 
        setImagenAgrandada={setImagenAgrandada} 
        setBusqueda={setBusqueda} 
        setBtnFavorito={setBtnFavorito}
        setProductosVisibles={setProductosVisibles}
      />
      
      <BarraNavegacion 
        setBtnFavorito={setBtnFavorito} 
        btnFavorito={btnFavorito} 
        setBusqueda={setBusqueda}
        setProductosVisibles={setProductosVisibles}
      />
      
      {
        btnFavorito.valor 
          ?<main className='main_principal'>
            {carrito.length > 0 ? carrito.map((prod, index) => 
              (<div className='tarjeta_favorito' key={prod.id}>
                <TarjetaFavorito
                  idFav={index}
                  imgFav={prod.thumbnail}
                  titleFav={prod.title}
                  producto={prod}
                  precio={prod.price}
                  setCarro={setCarrito}
                  carrito={carrito}
                  esFav={true}
                  alternarFavorito={alternarFavorito}
                  cantidad={cantidades[prod.id] || 1} 
                  setCantidad={(nuevaCantidad) => actualizarCantidad(prod.id, nuevaCantidad)}
                />
              </div>)) 
              :"TU LISTA DE DESEOS ESTA VACIA"
            }
          </main>
          :<main className='main_principal'>
            {
              productos.slice(0, productosVisibles).map((prod, index) => 
              (<div className="tarjeta" key={prod.id}>
                <TarjetaProducto
                  id={prod.id}
                  imgProd={prod.thumbnail} 
                  titleProd={prod.title} 
                  producto={prod} 
                  precio={prod.price} 
                  condicion={prod.condition} 
                  link={prod.permalink} 
                  setCarro={setCarrito} 
                  carrito={carrito} 
                  esFav={!!favoritos[prod.title]} 
                  alternarFavorito={alternarFavorito}
                /> 
              </div>))
            }

              <span ref={elementSpan}></span> 
          </main>
      }

      <aside className='anuncios'>
        <Carrusel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} ofertas={ofertas} />
        {
          propagandas.map((p, index)=><Propagandas propagandas={p} key={index}/>)
        }
      </aside>

      <Footer datosFooter={datosFooter}/>
    </div>
  );
}

export default App;

