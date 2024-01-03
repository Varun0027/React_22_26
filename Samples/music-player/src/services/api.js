import axios from 'axios'

const server = 'http://localhost:8081/songs' 

const getSongs =()=> axios.get(`${server}`)
const getSong =(id)=> axios.get(`${server}/${id}`)


export {getSongs,getSong}