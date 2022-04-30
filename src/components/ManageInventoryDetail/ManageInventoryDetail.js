import React from 'react'

const ManageInventoryDetail = ({ item }) => {
    const { name, price, quantity } = item
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td className='btn btn-link text-decoration-none text-danger'>X</td>
        </tr>
    )
}

export default ManageInventoryDetail