import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useManageInventory from '../../hooks/useManageInventory'
import ManageInventoryDetail from '../ManageInventoryDetail/ManageInventoryDetail'

const ManageInventory = () => {
    const [items] = useManageInventory()
    const navigate = useNavigate()
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
                        items.map(item => <ManageInventoryDetail
                            key={item._id}
                            item={item}
                        ></ManageInventoryDetail>)
                    }

                </tbody>
            </Table>
            <button
                onClick={() => navigate('/addNewItem')}
                className='btn btn-primary d-block mx-auto mt-4'>
                Add New Item</button>
        </div>
    )
}

export default ManageInventory