import React, { useState } from 'react'

import ThemeContext, { themeStyle } from './ThemeContext'

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themeStyle.light);

    const toggleTheme = () => {
        setTheme(theme === themeStyle.light
            ? themeStyle.dark
            : themeStyle.light)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider