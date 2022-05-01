import React from 'react'
import { Card } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import teddy from '../../images/teddy.jpg'
const CreateAccount = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const handleSignUp = () => {
        if (!user) {
            navigate('/signup')
        }
        return
    }
    return (
        <div>
            <Card
                style={{ backgroundColor: "#F6F6F6" }}
                className='container rounded w-50 mt-5'>
                <Card.Img style={{ height: '150px' }} variant="top" src={teddy} />
                <Card.Body>
                    <Card.Title className='text-center text-success'>Get Completely FREE Inventory Management!</Card.Title>
                    <Card.Text
                        style={{ fontSize: '20px' }}
                        className='text-center fs-16'>
                        Register now to create your first invoice,Click below to register free.
                    </Card.Text>
                    <button
                        onClick={handleSignUp}
                        className='btn btn-primary d-block mx-auto rounded rounded-pill'>Create Your Free Account Now</button>
                </Card.Body>
            </Card>
        </div >
    )
}

export default CreateAccount