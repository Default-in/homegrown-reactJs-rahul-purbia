import React from 'react'
import getClassName from '../getClassName'

import useTheme from '../useTheme'

import Button from './Button'
import SecondComponent from './SecondComponent'

const FirstComponent = () => {
    const { count, theme, toggleTheme } = useTheme();

    return (
        <>
            <div className={getClassName(theme)}>
                <div>Here is some text for first component</div>
                <div>{count}</div>
            </div>
            <Button onClick={toggleTheme} />
            <SecondComponent />
        </>
    )
}

export default FirstComponent
