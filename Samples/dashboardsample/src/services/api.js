import axios from 'axios'

const URI= 'http://localhost:3000'

const GetUsers =()=>  axios.get(`${URI}/users`)
const GetUser = (id)=> axios.get(`${URI}/users/${id}`)
const EditUser = (id,data) => axios.put(`${URI}/users/${id}`,data) 
const DeleteUser = (id)=>axios.delete(`${URI}/users/${id}`)
const AddUser =(data)=>axios.post(`${URI}/users`,data)

export {GetUsers,GetUser,EditUser,DeleteUser,AddUser}