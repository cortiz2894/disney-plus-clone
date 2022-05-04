import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Results from "../components/Results/Results"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import SearchInput from '../components/SearchInput/SearchInput'

const SearchPage = () => {
    return(
        <div className="home-page">
            <Header />
            <CssBaseline />
            <Container className="general-container">
                <SearchInput />
                <h2>Explorar</h2>
                <Results />
            </Container>
            <Footer />
        </div>
    )
}

export default SearchPage