import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import transitionAnimation from '../assets/transition.json';

const Transition = ({ onComplete, duration = 2000 }) => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      // Crear la animación
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false, // No loop para que termine y ejecute onComplete
        autoplay: true,
        animationData: transitionAnimation,
      });

      // Configurar velocidad si es necesario
      animationInstance.current.setSpeed(1);

      // Ejecutar onComplete después de la duración especificada
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, duration);

      // Cleanup
      return () => {
        clearTimeout(timer);
        if (animationInstance.current) {
          animationInstance.current.destroy();
        }
      };
    }
  }, [onComplete, duration]);

  return (
    <div className="transition-overlay">
      <div className="transition-content">
        <div 
          ref={animationContainer}
          className="transition-animation"
        />
      </div>
    </div>
  );
};

export default Transition; 