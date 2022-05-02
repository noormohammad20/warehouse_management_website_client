import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const Banner = () => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel
            activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '655px', backgroundSize: 'contain' }}
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/toys-store-love-friendship-kids-adorable-cute-girls-play-with-soft-toys-happy-childhood-child-care-sisters-best-friends-play-sweet-childhood-childhood-concept-preparing-life_474717-39781.jpg?size=626&ext=jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '655px', backgroundSize: 'contain' }}
                    className="d-block w-100"
                    src="https://uploads-ssl.webflow.com/60edc0a8835d5b38bf11f03f/61cf097abda4b08bdbcc0f68_Periodic-and-Perpetual-Inventory-System.jpeg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '655px', backgroundSize: 'contain' }}
                    className="d-block w-100"
                    src="https://kissflow.com/wp-content/uploads/2019/08/asset-inventory-software-system.png"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}

export default Banner