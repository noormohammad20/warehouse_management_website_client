import React from 'react'

const MyItemDetail = ({ item }) => {
    const { _id, itemName, quantity, price, supplierName } = item
    const handleUserDelete = id => {
        const proceed = window.confirm('Are You Sure About Deleting??')
        if (proceed) {
            const url = `http://localhost:5000/inventoryItems/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('successfully deleted')
                        window.location.reload()
                    }
                })
        }
    }
    return (
        <tr>
            <td>{itemName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{supplierName}</td>
            <td onClick={() => handleUserDelete(_id)} className='btn btn-link text-decoration-none text-danger'>X</td>
        </tr>
    )
}

export default MyItemDetail