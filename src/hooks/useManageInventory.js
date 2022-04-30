import { useEffect, useState } from "react"

const useManageInventory = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/inventoryItems')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}
export default useManageInventory