import Title from "../components/Title/Title"
import Listado from "../components/Listado/Listado"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const HomePage = () => {
    return(
        <div className="home-page">
            <Header />
            <main className="general-container">
                <Title /> 
                <Listado />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage