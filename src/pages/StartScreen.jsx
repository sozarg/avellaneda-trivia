import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import bookWalkAnimation from '../assets/book-walk.json';
import Footer from '../components/Footer';
import './StartScreen.css';

const StartScreen = ({ onStartClick }) => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      // Crear la animación del libro
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: bookWalkAnimation,
      });

      // Configurar la velocidad al 75%
      animationInstance.current.setSpeed(0.75);
    }

    // Cleanup: destruir la animación cuando se desmonte
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
    };
  }, []);

  const handleStartClick = () => {
    onStartClick();
  };

  return (
    <div className="start-screen">
      <div className="start-screen-content">
        <h1 className="title">¿Cuánto sabés de Avellaneda?</h1>
        
        <div className="animation-container">
          <div 
            ref={animationContainer}
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        
        <button className="start-button" onClick={handleStartClick}>
          Comenzar
        </button>
      </div>
      
      <Footer theme="light" />
    </div>
  );
};

export default StartScreen; 