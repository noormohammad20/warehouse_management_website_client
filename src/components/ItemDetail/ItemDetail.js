import React from 'react'
import { useParams } from 'react-router-dom'
import useItemDetail from '../../hooks/useItemDetail'

const ItemDetail = () => {
    const { itemId } = useParams()
    const [item] = useItemDetail(itemId)
    console.log(item)

    return (
        <div style={{ minHeight: '80vh' }}>
            <h2>stock update for {item.name} </h2>
        </div>
    )
}

export default ItemDetail