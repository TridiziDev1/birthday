import React from 'react';
import "./BirthdaySection.css"
import Navbar from '../NavBar/Navbar';
import Icon from '../../assets/Ellipse 1436.png'
import flowers from '../../assets/image 2874.png'
import ballon from '../../assets/image (1).png'

const BirthdaySection = () => {
  return (
    <section className="birthday_section">
      <Navbar />
      <div className="birthday_circle">
        <img src={Icon} alt='container_flower' className='container_flower' />
        <div>
          <img src={flowers} alt='flower' className='flower' />
          <div className='Wishes_text_container'>
            <div className='Wishes_text'>
              {
                'Happy'.split('').map((letter, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.3}s` }}>{letter}</span>
                ))
              }
            </div>
            <div className='Wishes_text_cont'>
              {
                'Birthday'.split('').map((letter, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>{letter}</span>
                ))
              }
            </div>
            <div className='Wishes_text'>
              {
                'Sir'.split('').map((letter, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>{letter}</span>
                ))
              }
            </div>
          </div>
        </div>
        <div className='wishes_text_mainn'>
          <p>October 05</p>
          <p>Cheers to another year of amazing adventures and<br />unforgettable moments!</p>
        </div>
        <img src={ballon} alt='GG' className='ballon_img' />
      </div>
    </section>
  );
}

export default BirthdaySection;
