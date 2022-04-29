import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import HomePage from '../../pages/HomePage'
import DetailPage from '../../pages/DetailPage'

const AppRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<HomePage />}/>
                <Route path="/movie/:id/" element={<DetailPage />}/>
                <Route path="/peliculas" element={<HomePage />}/>
                <Route path="/series" element={<HomePage />}/>
                <Route path="/search" element={<HomePage />}/>
                <Route path="/whishlist" element={<HomePage />}/>
                <Route path="/originales" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter