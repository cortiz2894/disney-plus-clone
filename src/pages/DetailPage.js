import { useEffect, useState } from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { getMovie } from "../services/Movies.service";
import SnackBarMessage from "../components/SnackBarMessage/SnackBarMessage";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const [movieInfo, setMovieInfo] = useState({})
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });
    console.log(useParams())
    const {status, message, type } = showMessage
    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    useEffect( () => {
        getMovie('414906')
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
            <Header /> 
            <CssBaseline />
            <Container className="general-container">
                <h1>{movieInfo.original_title}</h1>
            </Container>
            <Footer />
            <SnackBarMessage 
                estado={status} 
                type={type} 
                handleClose={handleClose} 
                message={message}
            />
        </>
    )
}

export default DetailPage