import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import HomePage from '../../pages/HomePage'
import DetailPage from '../../pages/DetailPage'
import SearchPage from '../../pages/SearchPage'
import MiLista from '../../pages/MiLista'

const AppRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<HomePage />}/>
                <Route path="/movie/:id/" element={<DetailPage />}/>
                <Route path="/peliculas" element={<HomePage />}/>
                <Route path="/series" element={<HomePage />}/>
                <Route path="/search" element={<SearchPage />}/>
                <Route path="/whishlist" element={<MiLista />}/>
                <Route path="/originales" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter