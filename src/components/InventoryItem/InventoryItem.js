import { Button, Card, Col } from 'react-bootstrap'

const InventoryItem = ({ item }) => {
    const { name, price, quantity, supplierName, description, image } = item

    return (

        <Col>
            <Card>
                <Card.Img style={{ height: '350px' }} className='w-100' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Card.Title>{quantity}</Card.Title>
                    <Card.Title>{supplierName}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="success">update stock</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default InventoryItem