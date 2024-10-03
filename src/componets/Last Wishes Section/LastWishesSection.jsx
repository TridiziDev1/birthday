import React from 'react'
import "./LastWishesSection.css"
export default function LastWishesSection() {
  return (
    <div className='grid-box'>

<div className="grid-container">
      <div className="small">1</div>  {/* Top left small */}
      <div className="small">2</div>  {/* Top small */}
      <div className="small">3</div>  {/* Top right small */}
      <div className="small">4</div>  {/* Far right top small */}
      <div className="large">5</div>  {/* Left large */}
      <div className="small">6</div>  {/* Left of center small */}
      <div className="large">
        <img src="path-to-your-image.jpg" alt="Large" />
      </div>  {/* Center large */}
      <div className="small">8</div>  {/* Right of center small */}
      <div className="large">9</div>  {/* Right large */}
      <div className="small">10</div>  {/* Bottom left small */}
      <div className="large">11</div>  {/* Bottom large */}
      <div className="small">12</div>  {/* Bottom right small */}
      <div className="small">13</div>  {/* Bottom far right small */}
      <div className="small">14</div>  {/* Bottom far left small */}
      <div className="small">15</div>  {/* Center bottom small */}
    </div>
    </div>
  )
}
