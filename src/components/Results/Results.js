import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import '../Listado/Listado.css'
import './Results.css'
//Services
import { getSearchResults } from '../../services/Movies.service'
import getMovies from '../../services/Movies.service'

const Results = ({searchValue}) => {
    const [listMovies, setListMovies] = useState([])

    useEffect( () => {
        //Mount
        if(searchValue === ''){
            getMovies()
            .then( (res) => {
                setListMovies(res.data.results)
            })
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
            {listMovies.map( (movie) => {
                console.log("movie: ", movie)
                return(
                    <div className='swiper-slide' >
                        <Card id={movie.id} poster={movie.backdrop_path}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Results