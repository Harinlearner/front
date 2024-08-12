import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Users = () => {
  const [users, setUsers] = useState([{
  }])
  useEffect(() => {
    axios.get('https://backendserver-m6nf.onrender.com/fetch')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));

  }, [])
  return (
    <div>
      <div>
        <div>
          <table>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </thead>
            <tbody>
              {
                users.map((user) => {
                  return <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>

                    </td>
                  </tr>
                })
              }
            </tbody>

          </table>
        </div>
          <Link to={`/creating/`}>Create</Link>
      </div>
    </div>
  )
}

export default Users
