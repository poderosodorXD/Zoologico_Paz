import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'

const ListaMenu = [
    {
        "id": "1",
        "nombre": "Home"
    },
    {
        "id": "2",
        "nombre": "Exhibiciones"
    }
    ,
    {
        "id": "3",
        "nombre": "Acuario"
    },
    {
        "id": "4",
        "nombre": "Noticias"
    },
    {
        "id": "5",
        "nombre": "Tienda"
    }
];

const NavBar = () => {

    return (
        <nav className='navegaContenedor'>
            <div className='listaMenu-nc'>
                {
                    ListaMenu.map((x, i) => {
                        return (
                            <a href="/" key={i}>{x.nombre}</a>
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