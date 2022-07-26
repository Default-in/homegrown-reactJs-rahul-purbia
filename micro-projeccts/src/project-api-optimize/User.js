import React, { useEffect, useReducer, useState } from 'react'

import UserService from './UserService';

import useDebounce from './useDebounce';
import useUserReducer from './UserReducer';

import './User.css'

const User = () => {
    const [state, dispatch] = useUserReducer()
    const debouncedValue = useDebounce(state.inputText, 500);

    const updateField = (event) => dispatch({ type: "UPDATE_INPUT_TEXT", payload: event.target.value })

    useEffect(() => {
        if (debouncedValue) {
            dispatch({ type: "PREPARE_FETCH" })
            UserService.getUser(debouncedValue)
                .then(data => data.json())
                .then(user => user[0]
                    ? dispatch({ type: "SET_USER", payload: user[0] })
                    : dispatch({ type: "SET_NO_SUCH_USER" }))
                .catch((error) => {
                    dispatch({ type: "SET_API_ERROR", payload: error.message || error })
                })
                .finally(() => {
                    dispatch({ type: "SET_LOADING", payload: false })
                })
        }
    }, [debouncedValue])

    const showUserDetails = () => {
        if (state.apiError) {
            return <div className='api-error-message'>{state.apiError}</div>
        }
        else if (debouncedValue === "") {
            return <div>Enter some details</div>
        }
        else {
            if (state.userExists) {
                return <div className="user-details">
                    <div>Id: {state.user.id}</div>
                    <div>Name: {state.user.firstName} {state.user.lastName}</div>
                    <div>Username: {state.user.username}</div>
                    <div>Email: {state.user.email}</div>
                </div>
            }
            else {
                return <div> No user found</div>
            }
        }
    }

    return (
        <div className="container">
            <div className="input-wrapper">
                <label htmlFor="user-id">User Id</label>
                <input type="number" id="user-id" value={state.inputText} onChange={updateField} />
            </div>
            {
                state.dataLoading
                    ? <div>...Loading</div>
                    : showUserDetails()
            }
        </div>
    )
}

export default User