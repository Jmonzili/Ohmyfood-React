import '../../style/Header.css'
import { Link } from'react-router-dom'

function Header() {
    return (
        <header>
            <h1 className='logo'>Ohmyfood</h1>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/menu">Menu</Link>
            </nav>
        </header>
        
    )
}

export default Header