import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../Loading/Loading'

const Social = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const navigate = useNavigate()

    if (googleUser) {
        navigate('/home')
    }
    if (googleLoading) {
        return <Loading></Loading>
    }
    let socialError
    if (googleError) {
        socialError = <p className='text-danger '> {googleError?.message}</p>
    }
    return (
        <div>
            {socialError}
            <button className='btn btn-success d-block mx-auto my-2' onClick={() => signInWithGoogle()}>SignIn With Google</button>
        </div>
    )
}

export default Social