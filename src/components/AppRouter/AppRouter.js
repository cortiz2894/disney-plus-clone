import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import HomePage from '../../pages/HomePage'

const AppRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<HomePage />}/>
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