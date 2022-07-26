import React from 'react'

import useTheme from '../useTheme';

import "../Button.css"

const Button = ({ onClick }) => {
    const { theme } = useTheme();

    return (<div className='button-wrapper'>
        <button className={`toggle-theme-button ${theme === "light" ? "light-button" : "dark-button"}`} onClick={onClick}>Toggle Theme</button>
    </div>
    )
}

export default Button