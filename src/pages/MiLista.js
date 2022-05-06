import Header from "../components/Header/Header"
import { useState } from "react"
import { CssBaseline } from "@mui/material"
import { Container } from "@mui/material"
import Results from "../components/Results/Results"
import Footer from "../components/Footer/Footer"

const MiLista = () => {
    const [searchValue, setSearchValue] = useState('')
    return(
    <div className="home-page">
            <Header />
            <CssBaseline />
            <Container className="general-container">
                <h2>Mi Lista</h2>
                <Results searchValue={searchValue} listPage={true}/>
            </Container>
            <Footer />
        </div>
    )
}

export default MiLista