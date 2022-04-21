import Title from "../components/Title/Title"
import Listado from "../components/Listado/Listado"

const HomePage = () => {
    return(
        <div className="home-page">
            <header>NavBar</header>
            <Title /> 
            <Listado />
        </div>
    )
}

export default HomePage