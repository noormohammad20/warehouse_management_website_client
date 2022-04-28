import React from 'react'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='footer'>
            <footer className=' footer text-center mt-5 border border-dark bg-dark text-light '>
                <p><small>Copyright &copy; {year} Toy Warehouse. All rights reserved </small></p>
            </footer>
        </div>
    )
}

export default Footer