import '../header/Header.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {

    return (
        <header className="headerContenedor">
            <div className='imgLogo'>
                <a href="#">
                    <img src="img/LOGO.jpg" alt="Logo Zoologico" />
                </a>
            </div>
            <NavBar /> 
        </header>
    )
}

export default Header