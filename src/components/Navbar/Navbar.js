import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='left'>
                    <h2>Home</h2>
                </div>
                <div className='right'>
                    <h2>About Us</h2>
                    <h2>Contact</h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar