import React from 'react'

import './Carousel.css'

const data = Array(20).fill(0).map((i, index) => index + 1);

const Carousel = () => {
    return (
        <div className="carousel">
            {data.map(id =>
                <div className="carousel-element" key={id}>{id}</div>)
            }
        </div>
    )
}

export default Carousel