import { Table } from 'react-bootstrap'
import useManageInventory from '../../hooks/useManageInventory'
import ManageInventoryDetail from '../ManageInventoryDetail/ManageInventoryDetail'

const ManageInventory = () => {
    const [items] = useManageInventory()
    return (
        <div style={{ minHeight: '85vh' }}>
            <Table className='w-75 mx-auto mt-4' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <ManageInventoryDetail
                            key={item._key}
                            item={item}
                        ></ManageInventoryDetail>)
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default ManageInventory