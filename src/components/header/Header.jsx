import '../header/Header.css'
import Navegacion from '../NavBar/NavBar'

const Header = () => {

    return (
        <header className="headerContenedor">
            <div className='imgLogo'>
                <a href="#">
                    <img src="img/LOGO.jpg" alt="Logo Zoologico" />
                </a>
            </div>
            <Navegacion />
        </header>
    )
}

export default Header