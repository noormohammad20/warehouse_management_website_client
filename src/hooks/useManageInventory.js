import { useEffect, useState } from "react"

const useManageInventory = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://obscure-retreat-51462.herokuapp.com/inventoryItems')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}
export default useManageInventory