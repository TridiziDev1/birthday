import React, { useState, useEffect } from "react";
import "./BirthdaySection.css";
import Navbar from "../NavBar/Navbar";
import IconsEle from "../../assets/Ellipse.png";
import flowers from "../../assets/image 2874.png";
import ballon from "../../assets/image (1).png";

const translations = {
  en: { happy: "Happy", birthday: "Birthday", sir: "Sir" },
  es: { happy: "Feliz", birthday: "Cumpleaños", sir: "Señor" },
  fr: { happy: "Joyeux", birthday: "Anniversaire", sir: "Monsieur" },
  de: { happy: "Alles Gute", birthday: "zum Geburtstag", sir: "Herr" },
  it: { happy: "Buon", birthday: "Compleanno", sir: "Signore" },
  pt: { happy: "Feliz", birthday: "Aniversário", sir: "Senhor" },
  hi: { happy: "जन्मदिन", birthday: "की शुभकामनाएं", sir: "सर" },
  zh: { happy: "生日", birthday: "快乐", sir: "先生" },
  kn: { happy: "ಹ್ಯಾಪಿ", birthday: "ಬರ್ತ್ ಡೇ", sir: "ಸರ್" },
  ar: { happy: "عيد", birthday: "ميلاد سعيد", sir: "سيد" },
  ru: { happy: "С Днем", birthday: "Рождения", sir: "Сэр" },
  ko: { happy: "생일", birthday: "축하합니다", sir: "님" },
};

const languageNames = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  pt: "Portuguese",
  hi: "Hindi",
  zh: "Chinese",
  kn: "Kannada",
  ar: "Arabic",
  ru: "Russian",
  ko: "Korean",
};

const languageOptions = Object.keys(translations);

const BirthdaySection = () => {
  const [language, setLanguage] = useState("en"); // Default language
  const [index, setIndex] = useState(0); // Index for cycling through languages

  // Function to change the language every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % languageOptions.length); // Cycle through languages
      setLanguage(languageOptions[index]);
    }, 5000); // 4 seconds interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [index]);

  const currentTranslation = translations[language];
  const currentLanguageName = languageNames[language];

  return (
    <section className="birthday_section">
      <Navbar />
      <div className="birthday_circle">
        <img src={IconsEle} alt="container_flower" className="container_flower" />
        <div>
          <img src={flowers} alt="flower" className="flower" />
          <div className="Wishes_text_container">
            <div className="current-language">
              <p>Wishes In : {currentLanguageName}</p>
            </div>
            <div className="Wishes_text">
              {currentTranslation?.happy.split("").map((letter, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.3}s` }}>
                  {letter}
                </span>
              ))}
            </div>
            <div className="Wishes_text_cont">
              {currentTranslation?.birthday.split("").map((letter, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                  {letter}
                </span>
              ))}
            </div>
            <div className="Wishes_text">
              {currentTranslation?.sir.split("").map((letter, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="wishes_text_mainn">
          <p>October 05</p>
          <p>
            Cheers to another year of amazing adventures and
            <br />
            unforgettable moments!
          </p>
        </div>
        <img src={ballon} alt="GG" className="ballon_img" />
      </div>

      {/* Display the current language */}

      {/* Language selection dropdown */}
      <div className="language-selector">
        <label>Select Language: </label>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          {languageOptions.map((langCode, idx) => (
            <option key={idx} value={langCode}>
              {languageNames[langCode]}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default BirthdaySection;
