import React, { useState, createContext, useEffect, useRef } from 'react'

export const ThemeContext = createContext();
const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");
    const [count, setCount] = useState(0);
    const isMountedRef = useRef(false);

    const toggleTheme = () => {
        setTheme(theme === "light"
            ? "dark"
            : "light")
    }

    useEffect(() => {
        if (isMountedRef.current) {
            setCount((prev) => prev + 1);
        }
    }, [theme])

    useEffect(() => {
        isMountedRef.current = true;

        return () => {
            isMountedRef.current = false;
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ count, theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider