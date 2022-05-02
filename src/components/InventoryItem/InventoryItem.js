import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './InventoryItem.css'
const InventoryItem = ({ item }) => {
    const { _id, itemName, price, quantity, supplierName, description, image } = item
    const navigate = useNavigate()
    const navigateToItemDetail = (id) => {
        navigate(`/inventoryItem/${id}`)
    }

    return (

        <Col>
            <Card
                style={{ width: '22rem', height: '450px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
                <Card.Img style={{ height: '25vh', objectFit: 'cover' }} className='w-100' variant="top" src={image} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>Product Name: {itemName}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Title>Quantity: {quantity}</Card.Title>
                    <Card.Title>Supplier Name: {supplierName}</Card.Title>
                    <Card.Text>
                        About: {description}
                    </Card.Text>
                    <Button
                        className='mt-auto button'
                        onClick={() => navigateToItemDetail(_id)}
                        variant="success">update stock</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default InventoryItem