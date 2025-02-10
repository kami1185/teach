import { useEffect, useState } from 'react'
import './css/matrixText.css'

const MatrixText  = ({text}) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [blink, setBlink] = useState(true);
  
    // Efecto para el typing
    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100); // Velocidad de escritura (ms)
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);
  
    // Efecto para el parpadeo final
    useEffect(() => {
      if (currentIndex === text.length) {
        const interval = setInterval(() => {
          setBlink(prev => !prev);
        }, 1000); // Velocidad de parpadeo (ms)
        return () => clearInterval(interval);
      }
    }, [currentIndex, text.length]);
  
    return (
      <div className="matrix-text-container">
        <div className="matrix-text">
          {displayText}
          <span className={`cursor ${blink ? 'visible' : ''}`}>█</span>
        </div>
      </div>
    );
}

export default MatrixText 