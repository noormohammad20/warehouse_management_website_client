import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../Loading/Loading'
import Social from '../Social/Social'

const Signup = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const handleSignup = e => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value


        if (password !== confirmPassword) {
            return alert('Your Password Not Matched')
        }
        createUserWithEmailAndPassword(email, password)

        navigate('/home')
    }
    const navigateLogin = () => {
        navigate('/login')
    }
    if (user) {
        console.log(user)
    }
    if (loading) {
        return <Loading></Loading>
    }
    let signupError
    if (error) {
        return <p className='text-danger text-center'> {error?.message} </p>
    }
    return (
        <div style={{ minHeight: '85vh' }}>
            <h2 className='text-success text-center my-3'>Please SignUp</h2>
            <Form className='w-50 mx-auto' onSubmit={handleSignup}>
                <Form.Group className="mb-4" controlId="formBasicText">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button className='w-50 d-block mx-auto mb-2' variant="success" type="submit">
                    Signup
                </Button>
            </Form>
            {signupError}
            <p className='text-center'>Already have an Account? ? <Link className='text-decoration-none text-success' to='/login' onClick={navigateLogin}>Please login</Link></p>
            <Social></Social>
        </div>
    )
}

export default Signup