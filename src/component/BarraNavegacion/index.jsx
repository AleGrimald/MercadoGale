import './BarraNavegacion.css'

export const BarraNavegacion = (props)=>{
    const {setBusqueda,setBtnFavorito, btnFavorito } = props;
    const {contenido} = btnFavorito;

    const busqueda = (e)=>{
        e.preventDefault();
        setBusqueda("ofertas del dia");
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

