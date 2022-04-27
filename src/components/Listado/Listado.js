
import Card from "../Card/Card"
import { useEffect,useState } from "react";
import axios from "axios";
import './Listado.css'
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
// Services
import getMovies from '../../services/Movies.service'


const Listado = () => {
    const [movies, setMovies] = useState([])

    useEffect( () => {
        getMovies().then( (res) => {
            setMovies(res.data.results)
        })
    }, [])
    
    {console.log("Actuliza")}
    return(
        <div className="container-section-list">
            <h1>Recomendaciones para ti</h1>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {movies.map( (movie) => {
                    const { original_title, poster_path, id } = movie
                    return(
                        <SwiperSlide key={id}>
                            <Link to={`/movie/${id}`} className='card-movie-item'>
                                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="img movie"/>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )

}

export default Listado