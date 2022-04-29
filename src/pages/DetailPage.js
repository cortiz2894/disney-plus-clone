import { useEffect, useState } from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { getMovie } from "../services/Movies.service";
import SnackBarMessage from "../components/SnackBarMessage/SnackBarMessage";
import { useParams, Navigate } from "react-router-dom";
import './DetailPage.css'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const DetailPage = () => {
    const { id } = useParams() 
    const [movieInfo, setMovieInfo] = useState({})
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });
    const {status, message, type } = showMessage
    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    useEffect( () => {
        console.log("id: ", id)

        getMovie(id)
        .then( (res) => {
          setMovieInfo(res.data)
        })
        .catch( (erro) => {
            setShowMessage({
                status: true,
                message: 'Hubo un error en la llamada a la API',
                type: 'error'
            })
        })
    }, [])

    return(
        
        <>
            {!localStorage.getItem('token') ? (
                <Navigate to='/login' />
            ) : (
                <>
                    <Header /> 
                    <CssBaseline />
                    <Container className="general-container">
                        <div className="header-detail-movie" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path})`}}>
                            <div className="header-detail-movie__info">
                                <h1>{movieInfo.original_title}</h1>
                                <Button 
                                    variant="contained" 
                                    className='btn-detail'
                                    startIcon={<PlayArrowIcon />}
                                >
                                    Ver ahora
                                </Button>
                                <p>{movieInfo.overview}</p>
                            </div>
                        </div>
                        
                    </Container>
                    <Footer />
                    <SnackBarMessage 
                        estado={status} 
                        type={type} 
                        handleClose={handleClose} 
                        message={message}
                    />
                </>
            )}
        </>
    )
}

export default DetailPage