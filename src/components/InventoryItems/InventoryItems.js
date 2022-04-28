import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import InventoryItem from '../InventoryItem/InventoryItem'

const InventoryItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1 className='text-primary text-center my-5'>Inventory Items</h1>
            <Row xs={1} md={2} className="g-4">
                {
                    items.map(item => <InventoryItem
                        item={item}
                    ></InventoryItem>)
                }
            </Row>


        </div>
    )
}

export default InventoryItems