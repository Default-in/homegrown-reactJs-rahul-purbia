import React from 'react'

import useTheme from '../useTheme';

import "../Button.css"

const Button = () => {
    const { theme, toggleTheme } = useTheme();

    return (<div className='button-wrapper'>
        <button className='toggle-theme-button' onClick={toggleTheme} style={theme.button}>Toggle Theme</button>
    </div>
    )
}

export default Button