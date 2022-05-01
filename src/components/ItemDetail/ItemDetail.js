import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import useItemDetail from '../../hooks/useItemDetail'

const ItemDetail = () => {
    const { itemId } = useParams()
    console.log(itemId)
    const [item] = useItemDetail(itemId)
    const { _id, image, description, price, quantity, supplierName, name } = item

    const handleDelivered = (id) => {
        const updateQuantity = {
            newQuantity: quantity - 1
        }
        console.log(updateQuantity)
        const url = `http://localhost:5000/inventoryItems/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)

        })
            .then(res => res.json())
            .then(data => console.log(data))
        window.location.reload()
    }

    const handleStock = (e) => {
        e.preventDefault()
        const stockInput = e.target.stock.value
        const stockUpdate = Number(stockInput)
        console.log(stockUpdate)
        const updateQuantity = {
            renewQuantity: quantity + stockUpdate
        }
        console.log(updateQuantity)
        const url = `http://localhost:5000/inventoryItems/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)

        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <Card className='mx-auto' style={{ minHeight: '80vh', width: '28rem' }}>
            <Card.Img className='w-50 mx-auto' variant="top" src={image} />
            <Card.Body>
                <Card.Title>Item Id: {_id}</Card.Title>
                <Card.Text> Item Name: {name} </Card.Text>
                <Card.Text> Price: {price} </Card.Text>
                <Card.Text > Quantity: {quantity} </Card.Text>
                <Card.Text> Price: {supplierName} </Card.Text>
                <Card.Text> description: {description}</Card.Text>
                <Button
                    onClick={() => handleDelivered(_id)}
                    variant="primary">Delivered</Button>
            </Card.Body>
            <Card.Body>
                <form onSubmit={handleStock}  >
                    <input type="text" name="stock" id="stock" />
                    <input type="submit" value="Stock" />
                </form>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail