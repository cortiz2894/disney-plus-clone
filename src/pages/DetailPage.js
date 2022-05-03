import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import './DetailPage.css'
import SnackBarMessage from "../components/SnackBarMessage/SnackBarMessage";
//Material UI
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CircularProgress from '@mui/material/CircularProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

//Services
import { getMovie } from "../services/Movies.service";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <h2>{children}</h2>
          </Box>
        )}
      </div>
    );
}

const DetailPage = () => {
    const { id } = useParams() 
    const [movieInfo, setMovieInfo] = useState({})
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });
    const [loader, setLoader] = useState(true)
    const [tabValue, setTabValue] = useState(0);

    const TabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const {status, message, type } = showMessage
    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    useEffect( () => {
        getMovie(id)
        .then( (res) => {
            console.log("res.data: ",res.data)
            setMovieInfo(res.data)
        })
        .catch( (erro) => {
            setShowMessage({
                status: true,
                message: 'Hubo un error en la llamada a la API',
                type: 'error'
            })
        })
        .finally( () => {
            setTimeout(() => {
                setLoader(false)
            }, 800)
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
                    <Container className="general-container detail-page-container">
                    {loader ? (
                        <div className="container-spinner">
                            <CircularProgress />
                        </div>
                    ) : (
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
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={tabValue} onChange={TabChange} aria-label="basic tabs example">
                                    <Tab label="SUGERENCIAS" id={`simple-tab-${0}`} aria-controls={`simple-tabpanel-${0}`} />
                                    <Tab label="EXTRAS" id={`simple-tab-${1}`} aria-controls={`simple-tabpanel-${1}`} />
                                    <Tab label="DETALLES" id={`simple-tab-${2}`} aria-controls={`simple-tabpanel-${2}`} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={tabValue} index={0}>
                                    <h2>Contenido Sugerencias</h2>
                                </TabPanel>
                                <TabPanel value={tabValue} index={1}>
                                    <h2>Contenido Extras</h2>
                                </TabPanel>
                                <TabPanel value={tabValue} index={2}>
                                    <div className="content-detail-movie">
                                        <p>Generos</p>
                                        <ul>
                                            {movieInfo.genres?.map( (genero) => {
                                                return <li><span>{genero.name}</span></li>
                                            })}
                                        </ul>
                                        <p>Fecha de esteno:</p>
                                        <span>{movieInfo.release_date}</span>
                                    </div>
                                </TabPanel>
                                
                            </div>
                        </div>
                    )}
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