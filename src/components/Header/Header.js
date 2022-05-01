import { signOut } from 'firebase/auth'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Toy Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="home#inventoryItems">Inventory</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/blogs">
                            Blogs
                        </Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="/manageItems">Manage Items</Nav.Link>
                                <Nav.Link as={Link} to="/addNewItem">Add Items</Nav.Link>
                                <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
                            </>
                        }
                        {
                            user ?
                                <button className='btn btn-link text-decoration-none text-light' onClick={handleSignOut} >Sign Out</button>
                                :
                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header