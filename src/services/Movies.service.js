import axios from 'axios'

const getMovies = () => {
    return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0ff5332abbc56d5b8800de5d07904251&language=es-ES&sort_by=popularity.desc')
}

export default getMovies