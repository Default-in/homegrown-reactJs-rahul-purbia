import React from 'react'
import { Provider } from 'react-redux'

import "../Common.css"

import { store } from '../store/store'

import FirstComponent from './FirstComponent'

const ParentComponent = () => {
    return (
        <Provider store={store}>
            <FirstComponent />
        </Provider>
    )
}

export default ParentComponent