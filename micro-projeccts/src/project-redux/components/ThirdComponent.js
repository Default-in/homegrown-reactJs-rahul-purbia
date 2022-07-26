import React from 'react'

import { useDispatch } from 'react-redux'

import useUserDetails from '../useUserDetails'

import { incrementAge } from '../store/userDetailsSlice'

const ThirdComponent = () => {
    const dispatch = useDispatch();
    const userDetails = useUserDetails();

    return (
        <div id="third-component-container">
            <div className="user-details">
                <div className='title'>Third Component (C) </div>
                <div>Name: {userDetails.name}</div>
                <div>Age: {userDetails.age}</div>
                <div>Role: {userDetails.role}</div>
            </div>
            <div className="increment-btn-wrapper">
                <button onClick={() => dispatch(incrementAge())}>Increment Age</button>
            </div>
        </div>
    )
}

export default ThirdComponent 