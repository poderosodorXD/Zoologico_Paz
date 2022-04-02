import { Link } from 'react-router-dom';
import '../Home/HomePage.css'

const HomePage = () => {
    return (
        <>
            <div className='bannerHome'>
                <h1>BIENVENIDOS AL ZOOLOGICO PAZ</h1>
                <img src="/img/BannerHome.jpg" alt="Zoologico Paz" />
            </div>
            <div className='contenidoHora'>
                <p>Abrimos los 365 días del año</p>
                <p>De 9:00 am. a 5:30 pm</p>
            </div>
            <div className='contenedorVerProductos'>
                <img src="/img/planeaViajejpg.jpg" alt="Tienda" />
                <div className='infoVP'>
                    <p>¡Planea tu día comprando los siguientes productos!</p>
                    <Link to={'/tienda'}>
                        <button className='btnTienda'>Tienda</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HomePage;