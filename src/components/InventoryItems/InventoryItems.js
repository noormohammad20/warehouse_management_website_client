import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import InventoryItem from '../InventoryItem/InventoryItem'

const InventoryItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/inventoryItems')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div id='inventoryItems' className='container'>
            <h1 className='text-primary text-center my-5'>Inventory Items</h1>
            <Row xs={1} sm={1} md={3} className="g-5">
                {
                    items.slice(0, 6).map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </Row>


        </div>
    )
}

export default InventoryItems