import React from 'react'

const Navbar = () => {
    return (
        <div>
        <div className="navbar">
            <div className="left-navbar">
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="logo">
                    <img src="https://picsum.photos/id/247/200/300" alt="logo" />
                </div>
            </div>
            <div className="right-navbar">
                <button>Logout</button>
            </div>
        </div>  
        </div>
    )
}

export default Navbar