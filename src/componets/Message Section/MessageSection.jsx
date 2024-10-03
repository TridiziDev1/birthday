import React from 'react';
import "./MessageSection.css"
const MessageSection = () => {
  return (
    <section className="message-section">
      <p className="message">
        Happy Birthday to the most amazing boss 🎉! You're like the ultimate combination of a wise mentor and the fun friend we all secretly wish we had. 
        May your birthday be filled with laughter, great food, and all the happiness you deserve. Here's to many more years of your leadership and that one-of-a-kind spirit! 🎂❤️
      </p>

      <div className="image-grid">
        {/* Replace with images as per your requirement */}
        <div className="grid-item"><img src="/path/to/image1.jpg" alt="Image 1" /></div>
        <div className="grid-item"><img src="/path/to/image2.jpg" alt="Image 2" /></div>
        <div className="grid-item"><img src="/path/to/image3.jpg" alt="Image 3" /></div>
      </div>

      <h2 className="final-wish">Once again, wish you many more happy returns of the day!</h2>
      <p className="from-team">- From your well-wishing team</p>
    </section>
  );
}

export default MessageSection;
