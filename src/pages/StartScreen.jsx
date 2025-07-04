import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import bookWalkAnimation from '../assets/book-walk.json';
import './StartScreen.css';

const StartScreen = () => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      // Crear la animación
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

    // Cleanup: destruir la animación cuando el componente se desmonte
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="start-screen">
      <div className="start-screen-content">
        <div className="animation-container">
          <div 
            ref={animationContainer}
            style={{ width: '300px', height: '300px' }}
          />
        </div>
        
        <h1 className="title">¿Cuánto sabés de Avellaneda?</h1>
        
        <div className="buttons-container">
          <button className="start-button">Jugar ahora</button>
          <button className="start-button">Instrucciones</button>
          <button className="start-button">Premios</button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen; 