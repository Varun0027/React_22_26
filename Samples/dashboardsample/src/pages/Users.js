import React, { useEffect, useState } from 'react'
import { DeleteUser, GetUsers } from '../services/api'
import { useTheme } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])
  const { theme } = useTheme()
  const navigate = useNavigate()
  const fetchUsers = async () => {
    try {
      const res = await GetUsers();
      setUsers(res.data);
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }
  const handleDelete = async (id) => {
    try {
      const res2 = await DeleteUser(id)
      if (res2.status === 200) {
        fetchUsers()
      }


    }
    catch (e) {
      console.log(e)
    }
  }

  console.log(users)
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <>

      <span className='shadow  data-table-container'>
        <table className='data-table'>
          <thead className={`${theme === 'light' ? 'light-theme' : 'dark-theme'} data-table-thead shadow`}>
            <tr>
              <th>
                ID
              </th>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Username
              </th>
              <th>
                Password
              </th>
              <th>
                Edit
              </th>
              <th>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.id}
                </td>
                <td>
                  {user.name}
                </td>
                <td>
                
                  {user.email}
                </td>
                <td>
                  {user.username}
                </td>
                <td>
                  {user.password}
                </td>
                <td>
                  <button className={`theme-btn-primary ${theme === 'light' ? 'theme-btn-primary-light' : 'theme-btn-primary-dark'}`} onClick={() => handleEdit(user.id)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className={`theme-btn-danger ${theme === 'light' ? 'theme-btn-danger-light' : 'theme-btn-danger-dark'}`} onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </span>
    </>
  )
}

export default Users