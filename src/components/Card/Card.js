import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ id ,poster }) => {
    return(
        <Link to={`/movie/${id}`} className='card-movie-item'>
            <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="img movie"/>
        </Link>
    )
}

export default Card