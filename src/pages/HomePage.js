import Title from "../components/Title/Title"
import Listado from "../components/Listado/Listado"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';


const HomePage = () => {
    return(
        <div className="home-page" style={{margin: '0 auto'}}>
            <Header />
            <CssBaseline />
            <Container className="general-container">
                
                <Title /> 
                <Listado />
            </Container>
            <Footer />
        </div>
    )
}

export default HomePage