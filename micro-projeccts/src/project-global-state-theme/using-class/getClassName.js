const getClassName = (theme) => {
    return `container ${theme === "light" ?
        "light-theme-container" :
        "dark-theme-container"}`
}

export default getClassName