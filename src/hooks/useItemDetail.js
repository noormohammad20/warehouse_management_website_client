import { useEffect, useState } from "react"

const useItemDetail = itemId => {
    const [item, setItem] = useState({})
    useEffect(() => {
        const url = `https://obscure-retreat-51462.herokuapp.com/inventoryItems/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId])

    return [item]
}
export default useItemDetail