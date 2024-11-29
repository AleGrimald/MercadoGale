import Productos from '../Productos';
import './Carrito.css';

const Carrito =(props)=>{
    const {datos}=props
    return<section><Productos productos={datos}/></section>
}

export default Carrito;