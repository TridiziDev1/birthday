import React from "react";
import "./MessageSection.css";
import elipse from "../../assets/Ellipse 1436.png";
import img1 from "../../assets/WhatsApp Image 2024-09-30 at 11.06.00 (1) 1.png";
import img2 from "../../assets/WhatsApp Image 2024-09-30 at 11.06.02 (2) 1.png";
const MessageSection = () => {
  return (
    <section id="about" className="message-section">
      <div className="message_div">
        <p className="message">
          Happy Birthday to the most amazing boss! 🎉 You're like the ultimate
          combination of a wise mentor and that fun friend we all secretly wish
          we had. We admire how you approach every challenge with the energy of
          a kid in a candy store – full of excitement and endless curiosity!
          Your knowledge never ceases to amaze us, and your kindness makes you
          the heart of our team. Thank you for always looking out for us and
          making work feel like a second home. May your birthday be filled with
          laughter, great food (we know you love it!), and all the happiness you
          deserve. Cheers to many more years of your leadership and <span>that
          one-of-a-kind spirit! 🎂🎈{" "}</span>
        </p>
      </div>
      <div className="image-grid">
        <img src={elipse} alt="img1" />
        {/* <div className='img-container'> */}
        <img className="message-img1" src={img1} alt="img2" />
        {/* </div> */}
        {/* <div className='img-container1'> */}
        <img src={img2} alt="img3" />
        {/* </div> */}

        <h1 className="h1-title">Naughty</h1>
        <h1 className="h1-title-1">Angry Bird</h1>
        {/* Replace with images as per your requirement */}
        {/* <div className="grid-item"><img src={} alt="Image 1" /></div>
        <div className="grid-item"><img src="/path/to/image2.jpg" alt="Image 2" /></div>
        <div className="grid-item"><img src="/path/to/image3.jpg" alt="Image 3" /></div> */}
      </div>

      {/* <h2 className="final-wish">Once again, wish you many more happy returns of the day!</h2>
      <p className="from-team">- From your well-wishing team</p> */}
    </section>
  );
};

export default MessageSection;
