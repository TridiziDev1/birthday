import React from 'react'
import "./NavBar.css"

function Navbar() {
  // const handleClick =()=>{
    
  // }
  return (
    <div className='Main_Nav'>
        <p className='Name'>Sandeep</p>
        <div className='Wishes_Banner'>
            {/* <p>Wishes</p> */}
            <a href="#about" className="nav-link">About B’day Star</a>
            <a href="#memory" className="nav-link">Memory Line</a>
        </div>
    </div>
  )
}

export default Navbar