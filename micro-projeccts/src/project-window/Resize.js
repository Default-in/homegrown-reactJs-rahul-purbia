import React from 'react'

import useResize from './useResize'

import "./Resize.css"

const Resize = () => {
    const width = useResize();

    const showMessage = () => {
        if (width < 150) {
            return <div>Too small width. Expand the window </div>
        }
        else if (width < 750) {
            return <div>Perfect width. Shrink/Expand window to see what happens</div>
        }
        else {
            return <div>Too big width. Shrink the window</div>
        }
    }

    return (
        <div className="container">
            {showMessage()}
        </div>
    )
}

export default Resize