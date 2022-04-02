import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'

const ListaMenu = [
    {
        "id": "1",
        "nombre": "Home",
        "nombrePagina": ""
    },
    {
        "id": "2",
        "nombre": "Tienda",
        "nombrePagina": "tienda"
    }
];

const NavBar = () => {

    return (
        <nav className='navegaContenedor'>
            <div className='listaMenu-nc'>
                {
                    ListaMenu.map((x, i) => {
                        return (
                            <NavLink to={`${x.nombrePagina}`} key={x.id} >
                                {x.nombre}
                            </NavLink>
                        )
                    })
                }
            </div>

            <div className='boxCarritoSesion'>
                <CartWidget /> 
            </div>
        </nav>
    )
}

export default NavBar