// import React, { useState, useEffect } from 'react';
// import confetti from 'canvas-confetti';
// import "./CountdownSection.css"
// const CountdownSection = () => {
//   const [timeLeft, setTimeLeft] = useState({});
//   const [isBlastTime, setIsBlastTime] = useState(false);

//   useEffect(() => {
//     const countdownDate = new Date("Oct 5, 2024 00:00:00").getTime();

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countdownDate - now;

//       if (distance < 0) {
//         clearInterval(interval);
//         setIsBlastTime(true);
//         triggerConfettiBlast();
//       } else {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//         });
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const triggerConfettiBlast = () => {
//     const duration = 5 * 1000;  // Confetti duration (5 seconds)
//     const end = Date.now() + duration;

//     const frame = () => {
//       confetti({
//         particleCount: 3,
//         angle: 60,
//         spread: 55,
//         origin: { x: 0 }
//       });
//       confetti({
//         particleCount: 3,
//         angle: 120,
//         spread: 55,
//         origin: { x: 1 }
//       });

//       if (Date.now() < end) {
//         requestAnimationFrame(frame);
//       }
//     };

//     frame();
//   };

//   return (
//     <section className="countdown-section">
//       <h2>Awaited Blast</h2>
//       <div id="countdown">
//         <div>
//           <span>{timeLeft.days || "00"}</span>
//           <p>Days</p>
//         </div>
//         <div>
//           <span>{timeLeft.hours || "00"}</span>
//           <p>Hours</p>
//         </div>
//         <div>
//           <span>{timeLeft.minutes || "00"}</span>
//           <p>Minutes</p>
//         </div>
//         <div>
//           <span>{timeLeft.seconds || "00"}</span>
//           <p>Seconds</p>
//         </div>
//       </div>
//       {isBlastTime && <div id="blast">🎉 Blast Time! 🎉</div>}
//     </section>
//   );
// };

// export default CountdownSection;














// import React, { useState, useEffect } from 'react';
// import Confetti from 'react-confetti';
// // import { useSpring, animated } from 'react-spring';
// import { useSpring, animated } from '@react-spring/web';
// import './CountdownSection.css';

// const CountdownSection = () => {
//   const [timeLeft, setTimeLeft] = useState({});
//   const [isBlastTime, setIsBlastTime] = useState(false);
//   const [isGiftBoxClicked, setIsGiftBoxClicked] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [windowHeight, setWindowHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     const countdownDate = new Date('Oct 2, 2024 20:00:00').getTime();

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countdownDate - now;

//       if (distance < 0) {
//         clearInterval(interval);
//         setIsBlastTime(true);
//       } else {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//         });
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//     setWindowHeight(window.innerHeight);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Animation for the gift box
//   const boxSpring = useSpring({
//     transform: isGiftBoxClicked ? 'scale(1.2)' : 'scale(1)',
//     config: { tension: 200, friction: 12 },
//   });

//   // Animation for the lid when the box is clicked
//   const lidSpring = useSpring({
//     transform: isGiftBoxClicked ? 'rotate(-45deg)' : 'rotate(0deg)',
//     config: { tension: 220, friction: 10 },
//   });

//   const handleGiftBoxClick = () => {
//     setIsGiftBoxClicked(true);
//   };

//   return (
//     <section className="countdown-section">
//       <h2>Awaited Blast</h2>
//       <div id="countdown">
//         <div>
//           <span>{timeLeft.days || '00'}</span>
//           <p>Days</p>
//         </div>
//         <div>
//           <span>{timeLeft.hours || '00'}</span>
//           <p>Hours</p>
//         </div>
//         <div>
//           <span>{timeLeft.minutes || '00'}</span>
//           <p>Minutes</p>
//         </div>
//         <div>
//           <span>{timeLeft.seconds || '00'}</span>
//           <p>Seconds</p>
//         </div>
//       </div>

//       {/* Confetti Blast */}
//       {isBlastTime && <Confetti width={windowWidth} height={windowHeight} />}

//       {/* Gift Box Animation */}
//       {isBlastTime && !isGiftBoxClicked && (
//         <animated.div className="gift-box" style={boxSpring} onClick={handleGiftBoxClick}>
//           <animated.div className="lid" style={lidSpring}></animated.div>
//           <div className="box"></div>
//         </animated.div>
//       )}

//       {/* Birthday Card after Gift Box is clicked */}
//       {isGiftBoxClicked && (
//         <div className="birthday-card">
//           <h1>Happy Birthday!</h1>
//           <p>Wishing you a wonderful year filled with love and joy!</p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default CountdownSection;







import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './CountdownSection.css';
import baloon from "../../assets/image 2872.png"
import cake from "../../assets/image 2873.png"
import Box from '../Box/Box';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isBlastTime, setIsBlastTime] = useState(false);
  useEffect(() => {
    const countdownDate = new Date("Oct 3, 2024 22:07:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsBlastTime(true);
        triggerConfettiBlast();
         playCelebrationAudio(); 
        speakBirthdayWishes();  // Call the function to speak birthday wishes
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const triggerConfettiBlast = () => {
    const duration = 100 * 1000;  // Confetti duration (5 seconds)
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 120,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 120,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  const speakBirthdayWishes = () => {
    const message = "Happy Birthday! Wishing you a wonderful day filled with love, joy, and celebration!";
    const utterance = new SpeechSynthesisUtterance(message);

    // Optional: Set voice and properties
    utterance.pitch = 1; // Change pitch
    utterance.rate = 1;  // Change rate
    utterance.volume = 1; // Change volume

    // Speak the birthday wishes
    window.speechSynthesis.speak(utterance);
  };

   const playCelebrationAudio = () => {
    const audio = new Audio(celebrationAudio);
    audio.play();
  };

  return (
    <section className="countdown-section">
      {
        !isBlastTime ?
          <>
            <h2><span>A</span>waited <span>B</span>last</h2>
            <div id="countdown">
              <div>
                <div className='timer'>{timeLeft.days < 10 ? `${timeLeft.days}0` : timeLeft.days || "00"}</div>
                <p>Days</p>
              </div>
              <div>
                <div className='timer'>{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours || "00"}</div>
                <p>Hours</p>
              </div>
              <div>
                <div className='timer'>{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes || "00"}</div>
                <p>Minutes</p>
              </div>
              <div>
                <div className='timer'>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds || "00"}</div>
                <p>Seconds</p>
              </div>
            </div>
          </>
          :
          <>
            <div className='images'>
              <img src={baloon} alt="" />
              <img src={cake} alt='' />
            </div>
            <div className='gift-container'>
              <Box/>
            </div>
            <div className='h2-container'>
              <h2 className='h2' style={{fontSize:"1rem"}}>
                <span style={{ '--i': 1 }}>H</span>
                <span style={{ '--i': 2 }}>a</span>
                <span style={{ '--i': 3 }}>p</span>
                <span style={{ '--i': 4 }}>p</span>
                <span style={{ '--i': 5 }}>y</span>
                <span style={{ '--i': 6, marginLeft: '3vw' }}>B</span>
                <span style={{ '--i': 7 }}>i</span>
                <span style={{ '--i': 8 }}>r</span>
                <span style={{ '--i': 9 }}>t</span>
                <span style={{ '--i': 10 }}>h</span>
                <span style={{ '--i': 11 }}>D</span>
                <span style={{ '--i': 12 }}>a</span>
                <span style={{ '--i': 13 }}>y</span>
              </h2>
              </div>
              <div className='h2-container1'>
              <h2 className='h2' style={{fontSize:"1rem"}}>
                <span style={{ '--i': 14 }}>S</span>
                <span style={{ '--i': 15 }}>a</span>
                <span style={{ '--i': 16 }}>n</span>
                <span style={{ '--i': 17 }}>d</span>
                <span style={{ '--i': 18 }}>e</span>
                <span style={{ '--i': 19,  }}>e</span>
                <span style={{ '--i': 20 }}>p</span>
                <span style={{ '--i': 21 ,marginLeft: '3vw'}}>s</span>
                <span style={{ '--i': 22 }}>i</span>
                <span style={{ '--i': 23 }}>r</span>
                {/* <span style={{ '--i': 11 }}>D</span>
                <span style={{ '--i': 12 }}>a</span>
                <span style={{ '--i': 13 }}>y</span> */}
              </h2>
            </div>
             
          </>
      }
    </section>
  );
};

export default CountdownSection;






