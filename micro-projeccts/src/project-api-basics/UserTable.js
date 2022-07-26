import React, { useEffect, useState, useMemo } from "react";
import UserService from "./UserService";
import "./UserTable.css";

const UserTable = () => {
  const [users, setUsers] = useState({
    records: [],
    totalCount: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 10;
  const maxPages = useMemo(() => Math.ceil(users.totalCount / limit), [users.totalCount, limit]);
  console.log(users, maxPages)
  //api call fetch data button handling
  const fetchData = () => {
    setIsLoading(true);
    // UserService.getAllUsers()
    UserService.getUsers(currentPage, limit)
      .then(async (data) => {
        setUsers({
          records: await data.json(),
          totalCount: data.headers.get('x-total-count')
        })
      })
      .catch((error) => { })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleOnClick = (event) => {
    fetchData();
  };

  const changeToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const changeToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className="container">
      {users.records.length === 0 && (
        <button className="fetch-btn" onClick={handleOnClick}>
          Get Users
        </button>
      )}
      {isLoading ? (
        <h3>Loading...</h3>
      ) :
        <>
          {users.records.length > 0 && (
            <>
              <table>
                <thead>
                  <tr>
                    <th>SNo.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Marital Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.records.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{`${user.address.house}, ${user.address.street}, ${user.address.city}`}</td>
                      <td>{user.age}</td>
                      <td>{user.maritalStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="controls">
                <button
                  onClick={changeToPreviousPage}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                Page {currentPage} of {maxPages} pages
                <button onClick={changeToNextPage} disabled={currentPage === maxPages}>
                  Next
                </button>
              </div>
            </>
          )}
        </>
      }
    </div>
  );
};

export default UserTable;
