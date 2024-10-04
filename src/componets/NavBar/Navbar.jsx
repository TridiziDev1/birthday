import React from 'react'
import "./NavBar.css"

function Navbar() {
  return (
    <div className='Main_Nav'>
        <p className='Name'>Sandeep</p>
        <div className='Wishes_Banner'>
            {/* <p>Wishes</p> */}
            <p>About B’day Star</p>
            <p>Memory Line</p>
        </div>
    </div>
  )
}

export default Navbar