import axios from 'axios'

const apiKey = '0ff5332abbc56d5b8800de5d07904251'
const baseUrl = 'https://api.themoviedb.org/3/'

const getMovies = (type) => {
    return axios.get(`${baseUrl}movie/${type}?api_key=${apiKey}&language=es-ES&page=1`)
}

const getMovie = (id) => {
    return axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}&language=es-ES`)
}

const getSearchResults = (query) => {
    return axios.get(`${baseUrl}search/movie?api_key=${apiKey}&language=es-ES&query=${query}&page=1&include_adult=false`)
}

export default getMovies
export { getMovie, getSearchResults }