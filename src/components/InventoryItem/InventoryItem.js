import { Button, Card, Col } from 'react-bootstrap'

const InventoryItem = ({ item }) => {
    const { name, price, quantity, supplierName, description, image } = item

    return (

        <Col style={{ mx: 'auto' }}>
            <Card style={{ width: '25rem' }}>
                <Card.Img style={{ height: '350px' }} className='w-100' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Product Name: {name}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Title>Quantity: {quantity}</Card.Title>
                    <Card.Title>Supplier Name: {supplierName}</Card.Title>
                    <Card.Text>
                        About: {description}
                    </Card.Text>
                    <Button variant="success">update stock</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default InventoryItem