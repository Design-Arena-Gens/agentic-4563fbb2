'use client';

import { useState, useEffect } from 'react';
import './styles.css';

export default function Home() {
  const [scene, setScene] = useState(0);
  const [showText, setShowText] = useState(false);

  const verses = [
    {
      sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
      translation: "You have the right to perform your duties, but not to the fruits of your actions",
      chapter: "Chapter 2, Verse 47"
    },
    {
      sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय",
      translation: "Perform your duty with an equipoised mind, O Arjuna, abandoning attachment",
      chapter: "Chapter 2, Verse 48"
    },
    {
      sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत",
      translation: "Whenever there is a decline in righteousness, I manifest myself on earth",
      chapter: "Chapter 4, Verse 7"
    },
    {
      sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज",
      translation: "Abandon all varieties of duties and surrender unto Me alone",
      chapter: "Chapter 18, Verse 66"
    }
  ];

  useEffect(() => {
    setShowText(true);
    const timer = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setScene((prev) => (prev + 1) % verses.length);
        setShowText(true);
      }, 500);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="container">
      <div className="battlefield">
        {/* Sun */}
        <div className="sun"></div>

        {/* Clouds */}
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>

        {/* Mountains in background */}
        <div className="mountains">
          <div className="mountain mountain1"></div>
          <div className="mountain mountain2"></div>
          <div className="mountain mountain3"></div>
        </div>

        {/* Chariot */}
        <div className="chariot">
          <div className="chariot-body">
            <div className="wheel wheel-left"></div>
            <div className="wheel wheel-right"></div>
          </div>

          {/* Krishna */}
          <div className="krishna">
            <div className="krishna-crown"></div>
            <div className="krishna-head"></div>
            <div className="krishna-body"></div>
            <div className="krishna-arm-left"></div>
            <div className="krishna-arm-right"></div>
            <div className="flute"></div>
            <div className="divine-aura"></div>
          </div>

          {/* Arjuna */}
          <div className="arjuna">
            <div className="arjuna-crown"></div>
            <div className="arjuna-head"></div>
            <div className="arjuna-body"></div>
            <div className="arjuna-arm-left"></div>
            <div className="arjuna-arm-right"></div>
            <div className="bow"></div>
          </div>
        </div>

        {/* Armies in distance */}
        <div className="army army-left">
          <div className="soldier"></div>
          <div className="soldier"></div>
          <div className="soldier"></div>
          <div className="soldier"></div>
        </div>
        <div className="army army-right">
          <div className="soldier"></div>
          <div className="soldier"></div>
          <div className="soldier"></div>
          <div className="soldier"></div>
        </div>

        {/* Divine light from Krishna */}
        <div className="divine-light"></div>
        <div className="divine-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${45 + Math.random() * 10}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}></div>
          ))}
        </div>

        {/* Text overlay */}
        <div className={`text-overlay ${showText ? 'visible' : ''}`}>
          <h1 className="title">श्रीमद् भगवद् गीता</h1>
          <h2 className="subtitle">Bhagavad Gita - The Divine Song</h2>
          <div className="verse-container">
            <p className="sanskrit">{verses[scene].sanskrit}</p>
            <p className="translation">{verses[scene].translation}</p>
            <p className="chapter">{verses[scene].chapter}</p>
          </div>
        </div>

        {/* Scene indicators */}
        <div className="scene-indicators">
          {verses.map((_, idx) => (
            <div
              key={idx}
              className={`indicator ${scene === idx ? 'active' : ''}`}
              onClick={() => {
                setShowText(false);
                setTimeout(() => {
                  setScene(idx);
                  setShowText(true);
                }, 300);
              }}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}
