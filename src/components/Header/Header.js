import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {

    return(
        <header className='header-disney'>
            <div className="container-logo">
                <img src="./logo.svg" alt="" />
            </div>
            <navbar>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/peliculas'>Peliculas</Link></li>
                    <li><Link to='/series'>Series</Link></li>
                    <li><Link to='/search'>Busqueda</Link></li>
                    <li><Link to='/whishlist'>Favoritos</Link></li>
                    <li><Link to='/originales'>Originales</Link></li>
                </ul>
            </navbar>
        </header>
    )
}

export default Header