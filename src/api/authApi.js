import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://go-yugioh.herokuapp.com/',
})

export default authApi