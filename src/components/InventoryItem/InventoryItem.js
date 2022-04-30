import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const InventoryItem = ({ item }) => {
    const { _id, itemName, price, quantity, supplierName, description, image } = item
    const navigate = useNavigate()
    const navigateToItemDetail = (id) => {
        navigate(`/inventoryItem/${id}`)
    }

    return (

        <Col>
            <Card style={{ width: '25rem' }}>
                <Card.Img style={{ height: '350px' }} className='w-100' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Product Name: {itemName}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Title>Quantity: {quantity}</Card.Title>
                    <Card.Title>Supplier Name: {supplierName}</Card.Title>
                    <Card.Text>
                        About: {description}
                    </Card.Text>
                    <Button
                        onClick={() => navigateToItemDetail(_id)}
                        variant="success">update stock</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default InventoryItem