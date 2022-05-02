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
            <h1
                style={{ color: 'coral', fontSize: '40px', textTransform: 'uppercase' }}
                className='text-center my-5'>Inventory Items</h1>
            <Row xs={1} sm={1}
                md={3} className="g-5">
                {
                    items.slice(0, 6).map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </Row>

            <Button
                style={{ color: ' #fbe9e7', backgroundColor: 'rgb(30 34 38 / 85%)', fontSize: '20px' }}
                variant="btn text-decoration-none d-block mx-auto mt-4" onClick={() => navigate('/manageInventory')}>Manage Inventory</Button>
        </div>
    )
}

export default InventoryItems