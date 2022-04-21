import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Listado = () => {
    //Mount -> Montaje
    //Update -> Actualizacion
    //Unmount -> Desmontaje

    const navigate = useNavigate()

    useEffect( () => {
        //Mount -> Montaje
        if(!localStorage.getItem("token")) {
            console.log("redireccionar al login")
            navigate('/login')
        }
    })


    return(
        <h1>listado</h1>
    )

}

export default Listado