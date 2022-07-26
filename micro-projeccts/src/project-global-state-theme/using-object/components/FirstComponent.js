import React from 'react'

import useTheme from '../useTheme'

import Button from './Button'
import SecondComponent from './SecondComponent'

const FirstComponent = () => {
    const { theme } = useTheme();

    return (
        <div className='container' style={theme.body}>
            <div>Here is some text for first component</div>
            <Button />
            <SecondComponent />
        </div>
    )
}

export default FirstComponent
