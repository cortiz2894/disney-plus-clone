import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import '../Listado/Listado.css'
import './Results.css'
//Services
import { getSearchResults } from '../../services/Movies.service'
import getMovies from '../../services/Movies.service'

const Results = ({ searchValue, listPage}) => {
    const [listMovies, setListMovies] = useState([])

    useEffect( () => {
        //Mount
        if(searchValue === '' && !listPage){
            getMovies('now_playing')
            .then( (res) => {
                setListMovies(res.data.results)
            })
        } else {
            console.log("Traer peliculas de mi lista", JSON.parse(localStorage.getItem('miLista')))
            setListMovies(JSON.parse(localStorage.getItem('miLista')))
        }
    }, []) 

    useEffect( () => {
        //Update
        getSearchResults(searchValue)
        .then( (res) => {
            setListMovies(res.data.results)
        })
    } , [searchValue])

    return(
        <div className="container-results">
            {listMovies.length === 0 && <p>No hay resultados</p>}
            {console.log("movie: ", listMovies)}
            {listMovies.map( (movie) => {
                return(
                    <div className='swiper-slide' key={movie.id}>
                        <Card id={movie.id} poster={movie.backdrop_path}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Results