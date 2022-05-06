import { Navigate } from "react-router-dom"
//Components
import Listado from "../components/Listado/Listado"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import './HomePage.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';


const HomePage = () => {
    
    return(
        <>
            {!localStorage.getItem('token') ? (
                <Navigate to='/login' />
            ) : (
                <>
                    <div className="home-page" style={{margin: '0 auto'}}>
                        <Header />
                        <CssBaseline />
                        <Container className="general-container">
                            <Listado 
                                searchType={'now_playing'}
                                title={"Mas buscados"}
                            />
                            <Listado 
                                searchType={'top_rated'}
                                title={"Recomendados para ti"}
                            />
                            <Listado 
                                searchType={'upcoming'}
                                title={'Proximos estrenos'}
                            />
                        </Container>
                        <Footer />
                    </div>
                </>
            )}
        </>
    )
}

export default HomePage