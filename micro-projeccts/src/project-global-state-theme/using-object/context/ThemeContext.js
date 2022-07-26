import { createContext } from "react";

export const themeStyle = {
    light: {
        body: {
            background: "white",
            color: "black"
        },
        button: {
            background: "blue",
            color: "white"
        }
    },
    dark: {
        body: {
            background: "#333",
            color: "white"
        },
        button: {
            background: "lightyellow",
            color: "black"
        }
    }
}

const ThemeContext = createContext();

export default ThemeContext;