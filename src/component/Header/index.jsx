import './Header.css'

const Header = (props)=>{
    const {setBusqueda, setBtnFavorito, setProductosVisibles} = props;

    const busqueda = async (e)=>{
        e.preventDefault();
        const inpBuscar = document.querySelector("#header_buscar").value;
        await setBusqueda(inpBuscar);
        await setBtnFavorito({contenido:"Favoritos",valor:false});
        setProductosVisibles(10);

        const tarjeta = document.querySelector(".tarjeta");
        if(tarjeta){
            tarjeta.scrollIntoView({ behavior: 'smooth'});
        }

        let inpB = document.querySelector("#header_buscar");
        inpB.value="";
    }

    return<header className='header'>
        <span className='contenedor_logo'></span>
        <form className='contenedor_form'>
            <input type="search" placeholder='¿Que desea buscar?' id="header_buscar" />
            <button className='btn_buscar' onClick={busqueda}>Buscar</button>
        </form>

        <span className='contenedor_header_carrito'>
            <img className='header_carrito' src='carrito.svg' alt='Carrito'/>
        </span>
    </header>
}

export default Header;