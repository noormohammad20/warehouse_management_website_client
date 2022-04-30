import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useManageInventory from '../../hooks/useManageInventory'
import InventoryItem from '../InventoryItem/InventoryItem'

const InventoryItems = () => {
    const navigate = useNavigate()
    const [items] = useManageInventory()
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

            <Button variant="link text-decoration-none d-block mx-auto" onClick={() => navigate('/manageInventory')}>Manage Inventory</Button>
        </div>
    )
}

export default InventoryItems