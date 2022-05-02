import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import useItemDetail from '../../hooks/useItemDetail'

const ItemDetail = () => {
    const [stock, setStock] = useState()
    const { itemId } = useParams()
    const [item] = useItemDetail(itemId)
    const { _id, image, description, price, quantity, supplierName, itemName } = item

    const handleDelivered = (id) => {
        const updateQuantity = {
            newQuantity: quantity - 1
        }
        console.log(updateQuantity)
        const url = `https://obscure-retreat-51462.herokuapp.com/inventoryItems/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)

        })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(() => {
                window.location.reload()
            })
    }

    const handleStock = (e) => {
        e.preventDefault()
        const data = {
            upQuantity: Number(stock),
            quantity: Number(quantity)
        }
        const url = `https://obscure-retreat-51462.herokuapp.com/inventoryItems/update/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(() => {
                window.location.reload()
            })
    }
    return (
        <div
            className='mx-auto '
            style={{ minHeight: '85vh', width: '25rem' }}>
            <Card className='mt-3' >
                <Card.Img
                    style={{ height: '25vh', objectFit: 'cover' }}
                    className='w-75 mx-auto' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Item Id: {_id}</Card.Title>
                    <Card.Text> Item Name: {itemName} </Card.Text>
                    <Card.Text> Price: {price} </Card.Text>
                    <Card.Text > Quantity: {quantity} </Card.Text>
                    <Card.Text> Price: {supplierName} </Card.Text>
                    <Card.Text> description: {description}</Card.Text>
                    <Button
                        onClick={() => handleDelivered(_id)}
                        variant="primary d-block mx-auto">Delivered</Button>
                </Card.Body>
                <Card.Body>
                    <form onSubmit={handleStock}  >
                        <input
                            className='form-control'
                            type={"number"}
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                        <button className='btn-success mt-3' type='submit'>Re Stock</button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail