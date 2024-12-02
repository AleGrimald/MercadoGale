import './BarraNavegacion.css'

export const BarraNavegacion = (props)=>{
    const {setBusqueda,setBtnFavorito, btnFavorito,setProductosVisibles } = props;
    const {contenido} = btnFavorito;

    const busqueda = async (e)=>{
        e.preventDefault();
        await setBusqueda("ofertas del dia");
        await setBtnFavorito({contenido:"Favoritos",valor:false});
        setProductosVisibles(10);

        const tarjeta = document.querySelector(".tarjeta");
        if(tarjeta){
            tarjeta.scrollIntoView({ behavior: 'smooth'});
        }
    }

    const manejoBtnFav=()=>{
        contenido==="Favoritos"
        ?setBtnFavorito({contenido:"Menu Principal", valor:true})
        :setBtnFavorito({contenido:"Favoritos", valor:false})
    }

    const filtros = ()=>{
        
    }

    return <nav className='barra_nav'>
        <ul>
            <li onClick={manejoBtnFav}>{contenido}</li>
            <li onClick={busqueda}>Ofertas del Dias</li>
            <li onClick={filtros}>Filtrar Productos</li> {/*No te olvides de hacer este culiao, hay que hacer un menu con los filtros de productos*/}
        </ul>
    </nav>
}

