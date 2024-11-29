import './Header.css'

const Header = (props)=>{
    const {setBusqueda} = props;

    const busqueda = (e)=>{
        e.preventDefault();
        const inpBuscar = document.querySelector("#buscar").value;
        setBusqueda(inpBuscar);
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