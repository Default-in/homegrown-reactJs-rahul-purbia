import React from 'react'

import ThirdComponent from './ThirdComponent'

import useUserDetails from '../useUserDetails'

const SecondComponent = () => {
    const userDetails = useUserDetails();

    return (
        <div>
            <div className="user-details">
                <div className='title'>Second Component (B)</div>
                <div>Name: {userDetails.name}</div>
                <div>Age: {userDetails.age}</div>
                <div>Role: {userDetails.role}</div>
            </div>
            <ThirdComponent />
        </div>
    )
}

export default SecondComponent