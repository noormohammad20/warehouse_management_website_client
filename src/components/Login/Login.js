import React, { useEffect, useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Social from '../Social/Social'
import Loading from '../Loading/Loading'

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
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

    let from = location.state?.from?.pathname || "/"

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])

    if (loading || sending) {
        return <Loading></Loading>
    }

    let errorMessage
    if (error) {
        errorMessage = <p className='text-danger text-center'>{error?.message}</p>
    }
    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }
    const navigateSignup = () => {
        navigate('/signup')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast('sent email for reset your password ! please check your email')
        }
        else {
            toast.warn(' Please Enter Your Email Address!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <div style={{ minHeight: '85vh' }}>
            <h2 className='text-success my-3 text-center'>Please Login</h2>
            <Form className='w-50 mx-auto' onSubmit={handleLogin}>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 d-block mx-auto mt-2' variant="success" type="submit">
                    Login
                </Button>
            </Form>
            {errorMessage}
            <p className='text-center mt-2'>New in My Site ? <Link className='text-decoration-none text-success' to='/signup' onClick={navigateSignup}>Please Signup</Link></p>
            <p className='text-center mt-2'>Forgot password? <button className='text-decoration-none text-success btn btn-link' onClick={resetPassword}>reset your password</button></p>
            <Social></Social>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Login