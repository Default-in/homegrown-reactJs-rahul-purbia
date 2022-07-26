import React, { useState } from "react";
import UserService from "./UserServices";
import "./Users.css"

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = (event) => {
    Promise.allSettled([4, 9, 1, 20, 12]
      .map(UserService.getUser))
      .then(data =>
        data
          .filter(data => data.status === 'fulfilled')
          .map(data => data.value)
      )
      .then(setUsers)
      .catch(console.log)
      .finally(() => { })
  }

  return (
    <div className="container">
      <button onClick={fetchUsers}>Get Users</button>
      {users.length > 0 && <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        {users.map(user =>
          <tbody key={user.id}>
            <tr>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        )}
      </table>}
    </div>
  )
};

export default Users;
