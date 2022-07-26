import React from 'react'

import useUserDetails from '../useUserDetails'

import FourthComponent from './FourthComponent';
import SecondComponent from './SecondComponent'

const FirstComponent = () => {
    const userDetails = useUserDetails();

    return (
        <>
            <div className="user-details">
                <div className='title'> First Component (A)</div>
                <div>Name: {userDetails.name}</div>
                <div>Age: {userDetails.age}</div>
                <div>Role: {userDetails.role}</div>
            </div>
            <div id='second-section'>
                <SecondComponent />
                <FourthComponent />
            </div>
        </>
    )
}

export default FirstComponent