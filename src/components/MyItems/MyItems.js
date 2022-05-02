import axios from 'axios'
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import MyItemDetail from '../MyItemsDetail/MyItemDetail'

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email
            const url = `https://obscure-retreat-51462.herokuapp.com/myItems?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setItems(data)
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
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