import { Link } from 'react-router-dom'
import '../header/Header.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {

    return (
        <header className="headerContenedor">
            <div className='imgLogo'>
                <Link to={'/'}>
                    <img src="/img/LOGO.jpg" alt="Logo Zoologico" />
                </Link>
            </div>
            <NavBar />
        </header>
    )
}

export default Header