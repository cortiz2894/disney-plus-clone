import { Link } from 'react-router-dom'
import './Card.css'
const Card = () => {
    return(
        <Link to="/" className='card-movie-item'>
            <img src="./movies/1.jpg" alt="img movie"/>
        </Link>
    )
}

export default Card