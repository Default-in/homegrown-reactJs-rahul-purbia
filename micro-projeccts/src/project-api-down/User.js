import React, { useState } from 'react'
import UserServices from './UserServices'
import "./User.css"

const User = () => {
    const [user, setUser] = useState({});
    const [apiError, setApiError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchUser = () => {
        setApiError("")
        setIsLoading(true);
        UserServices.getUsers()
            .then((data) => data.json())
            .then(() => Promise.reject("rejected"))
            // .then(() => { throw new Error("api down") })
            .then(users => {
                setUser(users);
            })
            .catch((error) => {
                setApiError(error.message || error)
            }
            )
            .finally(() =>
                setIsLoading(false)
            )
    }

    return (
        <div className="container">
            <button onClick={fetchUser}>Get User Details</button>
            {isLoading
                ? <div>...Loading</div>
                : apiError
                    ? <div className='error'>{apiError}</div>
                    : <div className="user-details">
                        <div>Name : {user.firstName} {user.lastName}</div>
                        <div>Username : {user.username}</div>
                        <div>Email : {user.email}</div>
                    </div>}

        </div>
    )
}

export default User