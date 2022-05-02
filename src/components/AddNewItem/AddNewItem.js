import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'

const AddNewItem = () => {
    const [user] = useAuthState(auth)
    const handleAddItem = (e) => {
        e.preventDefault()
        const itemName = e.target.itemName.value
        const email = user.email
        const image = e.target.image.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        const supplierName = e.target.supplierName.value
        const description = e.target.description.value
        const item = { itemName, email, image, price, quantity, supplierName, description }
        fetch('http://localhost:5000/inventoryItems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)

        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('item added successfully!!!')
                e.target.reset()
            })
    }
    return (
        <div className='text-center' style={{ minHeight: '85vh' }}>
            <h2>Add new Item</h2>
            <form onSubmit={handleAddItem}>
                <input className='mt-3 w-50 border border-info' type="text" name="itemName" id="name" placeholder='enter item name' required />
                <br />
                <input className='my-3 w-50 border border-info' type="email" name="email" id="email" placeholder='email' required />
                <br />
                <input className='mb-3 w-50 border border-info' type="text" name="image" id="name" placeholder='enter item image url' required />
                <br />
                <input className='mb-3 w-50 border border-info' type="number" name="price" id="name" placeholder='price' required />
                <br />
                <input className='mb-3 w-50 border border-info' type="number" name="quantity" id="name" placeholder='quantity' required />
                <br />
                <input className='mb-3 w-50 border border-info' type="text" name="supplierName" id="name" placeholder='supplier name' required />
                <br />
                <input className='mb-3 w-50 border border-info' type="text" name="description" id="name" placeholder='description' required />
                <br />

                <input className='mt-3 btn btn-primary w-25' type="submit" value="add item" />
            </form>
        </div>
    )
}

export default AddNewItem