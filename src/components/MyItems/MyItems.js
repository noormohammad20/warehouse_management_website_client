import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import MyItemDetail from '../MyItemsDetail/MyItemDetail'

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    console.log(items)
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email
            const url = `http://localhost:5000/myItems?email=${email}`
            const { data } = await axios.get(url)
            setItems(data)
        }
        getItems()
    }, [user])
    return (

        <div style={{ minHeight: '85vh' }}>
            <Table className='w-75 mx-auto mt-4' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <MyItemDetail
                            key={item._id}
                            item={item}
                        >
                        </MyItemDetail>)
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default MyItems