
import Card from "../Card/Card"
import { useEffect,useState } from "react";
import axios from "axios";
import './Listado.css'
import { Link } from 'react-router-dom'
import SnackBarMessage from "../SnackBarMessage/SnackBarMessage";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// Services
import getMovies from '../../services/Movies.service'


const Listado = () => {
    const [movies, setMovies] = useState([])
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });

    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    useEffect( () => {
        getMovies()
        .then( (res) => {
            setMovies(res.data.results)
        })
        .catch( (err) => {
            setShowMessage({
                status: true,
                message: 'Hubo un error en la llamada a la API',
                type: 'error'
            })
        })
    }, [])
    
    const { status, message, type } = showMessage

    return(
        <div className="container-section-list">
            <h1>Recomendaciones para ti</h1>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                modules={[Navigation]}
                className="mySwiper"
                navigation={true}
            >
            {
                movies.length == 0 ? (
                    <span>No hay titulos para mostrar</span>
                ) : (
                    <>
                        {movies.map( (movie) => {
                            const { original_title, poster_path, id } = movie
                            return(
                                <SwiperSlide key={id}>
                                    <Card id={id} poster={poster_path} />
                                </SwiperSlide>
                            )
                        })}
                    </>
                )
            }
               
            </Swiper>
            <SnackBarMessage 
                estado={status} 
                type={type} 
                message={message} 
                handleClose={handleClose}
            />
        </div>
    )

}

export default Listado