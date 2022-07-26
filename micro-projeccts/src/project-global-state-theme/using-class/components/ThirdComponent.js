import React from 'react'
import getClassName from '../getClassName';
import useTheme from '../useTheme';

import Button from './Button'

const ThirdComponent = () => {
    const { theme, count, toggleTheme } = useTheme();
    return (
        <>
            <div className={getClassName(theme)}>
                <div>Here is some text for third component</div>
                <div>{count}</div>
            </div>
            <Button onClick={toggleTheme} />
        </>
    )
}

export default ThirdComponent