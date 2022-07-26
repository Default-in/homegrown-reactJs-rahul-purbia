import React from 'react'
import getClassName from '../getClassName'
import useTheme from '../useTheme'

import Button from './Button'
import ThirdComponent from './ThirdComponent'

const SecondComponent = () => {
    const { theme, count, toggleTheme } = useTheme();
    return (
        <>
            <div className={getClassName(theme)}>
                <div>Here is some text for second component</div>
                <div>{count}</div>
            </div>
            <Button onClick={toggleTheme} />
            <ThirdComponent />
        </>
    )
}

export default SecondComponent