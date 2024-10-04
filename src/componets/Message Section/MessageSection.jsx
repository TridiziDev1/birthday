import React,{useEffect, useRef} from "react";
import "./MessageSection.css";
import elipse from "../../assets/Ellipse 1436.png";
import img1 from "../../assets/WhatsApp Image 2024-09-30 at 11.06.00 (1) 1.png";
import img2 from "../../assets/WhatsApp Image 2024-09-30 at 11.06.02 (2) 1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import audioFile from '../../assets/raceGurram.mp3';
let text = "Happy Birthday to the most amazing boss! You're like the ultimate combination of a wise mentor and that fun friend we all secretly wish we had. We admire how you approach every challenge with the energy of a kid in a candy store – full of excitement and endless curiosity! Your knowledge never ceases to amaze us, and your kindness makes you the heart of our team. Thank you for always looking out for us and making work feel like a second home. May your birthday be filled with laughter, great food (we know you love it!), and all the happiness you  deserve. Cheers to many more years of your leadership and that  one-of-a-kind spirit!"
gsap.registerPlugin(ScrollTrigger);
const MessageSection = () => {
  const textRef = useRef(); // Reference to the paragraph
      const audioRef = useRef(null);
  
    const playAudio = () => {
      audioRef.current.play();
    };
  
    const pauseAudio = () => {
      audioRef.current.pause();
  };
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".message-section",
      start: "top 50%", // When the second page enters the viewport
      onEnter: () => {
        audioRef.current.play();
      },
      onLeave: () => {
        audioRef.current.pause();
      },
      onLeaveBack: () => {
        audioRef.current.pause(); // Pause when scrolling back up
      }
    });
  })
  useGSAP(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    const layertl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".message_div",
        start: "20% 70%",
        end: "90% 90%",
        // scrub: true,
        markers: false, // Uncomment to see debugging markers
      },
    });
    layertl2.fromTo(
      letters,
      { opacity: 0, y: 50 }, // Initial state: hidden and below its original position
      {
        opacity: 1,
        y: 0, // Moves back to its original position
        duration: 0.5, // Animation duration for each letter
        stagger: 0.1, // Delay between each letter animation
        ease: "power2.out", // Easing function for smooth effect

      }
    );
  })
    useEffect(() => {
    // Select each letter inside the span with class .letter
    
  }, []);
  useGSAP(() => {
    const layertl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message_div",
        start: "20% 70%",
        end: "35% 60%",
        // scrub: true,
        markers: false, // Uncomment to see debugging markers
      },
    });
    layertl.from(
      ".Naughty",
      {
        duration: 2,
        x: 300,
      },
      "layer-2"
    );
    layertl.from(
      ".Angry",
      {
        duration: 2,
        y: 200,
      }
    );
    // layertl.from(".layer-2-img", {
    //   duration: 2,
    //   scale: 0.5,
    // });
  
    gsap.to(".layer-2-img3", {
      scale: 1.2, // Scale the image to 120% (zoom in)
      duration: 2, // Animation duration (2 seconds to zoom in)
      ease: "power2.inOut", // Easing function for smooth animation
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse the animation after each cycle (zooms out)
    });
     gsap.to(".img-2-later2", {
      scale: 1.2, // Scale the image to 120% (zoom in)
      duration: 2, // Animation duration (2 seconds to zoom in)
      ease: "power2.inOut", // Easing function for smooth animation
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse the animation after each cycle (zooms out)
    });
  });
  
  return (
    <section id="about" className="message-section">
        <audio ref={audioRef} src={audioFile} />
      <div className="message_div">
         <p ref={textRef}>
      {text.split("").map((char, index) => (
        <span key={index} className="letter">
          {char === " " ? "\u00A0" : char} {/* Handle space */}
        </span>
      ))}
    </p>
      </div>
      <div className="image-grid">
        <img src={elipse} alt="img1" className="layer-2-img" />
        <img className="message-img1  img-2-later2" src={img1} alt="img2" />
        {/* </div> */}
        {/* <div className='img-container1'> */}
        <img src={img2} alt="img3" className="layer-2-img3" />
        {/* </div> */}

        <h1 className="h1-title Naughty">Naughty</h1>
        <h1 className="h1-title-1 Angry ">Angry Bird</h1>
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
