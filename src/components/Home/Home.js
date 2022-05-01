import React from 'react'
import Banner from '../Banner/Banner'
import CreateAccount from '../CreateAccount/CreateAccount'
import InventoryItems from '../InventoryItems/InventoryItems'
import OurServices from '../OurServices/OurServices'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <OurServices></OurServices>
            <CreateAccount></CreateAccount>
        </div>
    )
}

export default Home