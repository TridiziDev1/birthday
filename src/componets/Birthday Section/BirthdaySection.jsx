import React from 'react';
import "./BirthdaySection.css"
import Navbar from '../NavBar/Navbar';
const BirthdaySection = () => {
  return (
    <section className="birthday-section">
       <Navbar/>
      <div className="birthday-circle">
        {/* <h1>Happy Birthday Sir</h1>
        <p className="date">October 05</p>
        <p className="wish">Cheers to another year of amazing adventures and unforgettable moments!</p> */}
      </div>
    </section>
  );
}

export default BirthdaySection;
