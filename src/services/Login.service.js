import axios from 'axios'

const setLogin = (body) => {
    return axios.post("http://challenge-react.alkemy.org", body)
}

export default setLogin