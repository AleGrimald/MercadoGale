import './Header.css'

const Header = (props)=>{
    const {setBusqueda, btnCarro, setBtnCarro} = props;

    const busqueda = (e)=>{
        e.preventDefault();
        const inpBuscar = document.querySelector("#buscar").value;
        setBusqueda(inpBuscar);

    }

    return<header className='header'>
        <span className='contenedor_logo'></span>
        <form className='contenedor_form'>
            <input type="search" placeholder='¿Que desea buscar?' id="buscar" />
            <button className='btn_buscar' onClick={busqueda}>Buscar</button>
        </form>

        <span className='contenedor_header_carrito'>
            <button className='btn_carrito' onClick={()=>setBtnCarro(!btnCarro)}>CARRITO</button>
        </span>
    </header>
}

export default Header;