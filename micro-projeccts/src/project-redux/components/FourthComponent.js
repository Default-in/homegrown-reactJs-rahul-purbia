import React from 'react'

import useUserDetails from '../useUserDetails'

const FourthComponent = () => {
    const userDetails = useUserDetails();

    return (
        <div className="user-details">
            <div className='title'> Fourth Component (D)</div>
            <div>Name: {userDetails.name}</div>
            <div>Age: {userDetails.age}</div>
            <div>Role: {userDetails.role}</div>
        </div>
    )
}

export default FourthComponent