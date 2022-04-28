import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const Banner = () => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '655px' }}
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/toys-store-love-friendship-kids-adorable-cute-girls-play-with-soft-toys-happy-childhood-child-care-sisters-best-friends-play-sweet-childhood-childhood-concept-preparing-life_474717-39781.jpg?size=626&ext=jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '655px' }}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHRveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '655px' }}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFieSUyMHRveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}

export default Banner