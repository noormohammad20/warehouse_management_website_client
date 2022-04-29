import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location = useLocation()
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const handleLogin = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div style={{ minHeight: '85vh' }} className='w-50 mx-auto'>
            <h2 className='text-primary text-center my-3'>Please Login</h2>
            <Form onSubmit={handleLogin} >
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="my-3" controlId="formBasicPassword">
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" />
                </Form.Group>
                <Button variant="primary w-50 my-3" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login