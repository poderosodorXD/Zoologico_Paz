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

const Navegacion = () => {

    return (
        <nav className='navegaContenedor'>
            {
                ListaMenu.map((x, i) => {
                    return (
                        <a href="#" key={i}>{x.nombre}</a>
                    )
                })
            }
            {/* <a href="#">Home</a>
            <a href="#">Exhibiciones</a>
            <a href="#">Acuario</a>
            <a href="#">Noticias</a>
            <a href="#">Tienda</a> */}
        </nav>
    )
}

export default Navegacion