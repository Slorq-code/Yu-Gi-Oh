import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://go-yugioh.herokuapp.com/',
    params: {
        path: 'api/v1/register'
    }
})

export default authApi