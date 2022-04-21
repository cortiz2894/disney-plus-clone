import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import HomePage from '../../pages/HomePage'

const AppRouter = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/listado" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter