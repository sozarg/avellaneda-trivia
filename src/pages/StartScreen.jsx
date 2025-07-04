import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import bookWalkAnimation from '../assets/book-walk.json';
import Footer from '../components/Footer';
import Transition from '../components/Transition';
import './StartScreen.css';

const StartScreen = () => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);
  
  // Estados para controlar el flujo de la aplicación
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home', 'age-ranges', 'ready-to-play'
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    if (animationContainer.current && currentScreen === 'home') {
      // Crear la animación del libro solo en la pantalla home
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

    // Cleanup: destruir la animación cuando cambie la pantalla o se desmonte
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
    };
  }, [currentScreen]);

  const handleStartClick = () => {
    // Mostrar transición y luego cambiar a pantalla de rangos
    setShowTransition(true);
  };

  const handleTransitionFromHome = () => {
    // Ocultar transición y mostrar pantalla de rangos de edad
    setShowTransition(false);
    setCurrentScreen('age-ranges');
  };

  const handleAgeRangeClick = (ageRange) => {
    console.log('Rango de edad seleccionado:', ageRange);
    // Mostrar transición y luego ir a "listo para juego"
    setShowTransition(true);
  };

  const handleTransitionFromAgeRanges = () => {
    // Ocultar transición y mostrar "listo para juego"
    setShowTransition(false);
    setCurrentScreen('ready-to-play');
  };

  const handleTransitionComplete = () => {
    // Determinar qué hacer después de la transición basado en la pantalla actual
    if (currentScreen === 'home') {
      handleTransitionFromHome();
    } else if (currentScreen === 'age-ranges') {
      handleTransitionFromAgeRanges();
    }
  };

  const renderHomeScreen = () => (
    <>
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
    </>
  );

  const renderAgeRangesScreen = () => (
    <>
      <h1 className="title">¿Cuánto sabés de Avellaneda?</h1>
      
      <div className="age-ranges-section">
        <h2 className="age-ranges-title">Elegí tu rango de edad</h2>
        <div className="age-ranges-container">
          <button 
            className="age-range-button"
            onClick={() => handleAgeRangeClick('8-11')}
          >
            8–11 años
          </button>
          <button 
            className="age-range-button"
            onClick={() => handleAgeRangeClick('12-15')}
          >
            12–15 años
          </button>
          <button 
            className="age-range-button"
            onClick={() => handleAgeRangeClick('16-17')}
          >
            16–17 años
          </button>
          <button 
            className="age-range-button"
            onClick={() => handleAgeRangeClick('18+')}
          >
            18 o más
          </button>
        </div>
      </div>
    </>
  );

  const renderReadyToPlayScreen = () => (
    <>
      <h1 className="title">¡Listo para jugar!</h1>
      <div className="ready-to-play-content">
        <p>El juego está por comenzar...</p>
        <p>Aquí se implementará la lógica del juego.</p>
      </div>
    </>
  );

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'home':
        return renderHomeScreen();
      case 'age-ranges':
        return renderAgeRangesScreen();
      case 'ready-to-play':
        return renderReadyToPlayScreen();
      default:
        return renderHomeScreen();
    }
  };

  return (
    <div className="start-screen">
      <div className="start-screen-content">
        {renderCurrentScreen()}
      </div>
      
      <Footer />
      
      {showTransition && (
        <Transition 
          onComplete={handleTransitionComplete}
          duration={2000}
        />
      )}
    </div>
  );
};

export default StartScreen; 