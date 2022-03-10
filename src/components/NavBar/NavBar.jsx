import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'

const ListaMenu = [
    {
        "id": "1",
        "nombre": "Home",
        "nombrePage": ""
    },
    {
        "id": "2",
        "nombre": "Exhibiciones",
        "nombrePage": "exhibiciones"
    },
    {
        "id": "3",
        "nombre": "Tienda",
        "nombrePage": "tienda"
    }
];

const NavBar = () => {

    return (
        <nav className='navegaContenedor'>
            <div className='listaMenu-nc'>
                {
                    ListaMenu.map((x, i) => {
                        return (
                            <NavLink to={`${x.nombrePage}`} key={x.id} >
                                {x.nombre}
                            </NavLink>
                        )
                    })
                }
            </div>

            <div className='boxCarritoSesion'>
                <CartWidget />
                <div className='loginContenedor'>
                    <p className='iniciarSesText'>Iniciar Sesión</p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar