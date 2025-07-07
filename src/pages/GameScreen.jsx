import { useState, useEffect } from 'react';
import questions from '../data/questions';
import Footer from '../components/Footer';
import './GameScreen.css';

const GameScreen = ({ selectedAgeRange }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set());

  // Obtener preguntas para el rango de edad seleccionado
  const currentQuestions = questions[selectedAgeRange] || [];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Verificar si hay preguntas para el rango seleccionado
  useEffect(() => {
    if (currentQuestions.length === 0) {
      console.warn(`No hay preguntas disponibles para el rango de edad: ${selectedAgeRange}`);
    }
  }, [selectedAgeRange, currentQuestions.length]);

  // Manejar errores de carga de imagen
  const handleImageError = (imagePath) => {
    setImageErrors(prev => new Set([...prev, imagePath]));
  };

  // Verificar si una imagen tiene error
  const hasImageError = (imagePath) => {
    return imageErrors.has(imagePath);
  };

  // Manejar selección de respuesta
  const handleAnswerSelect = (answer) => {
    if (selectedAnswer !== null) return; // Evitar múltiples selecciones
    
    setSelectedAnswer(answer);
    setShowResult(true);

    // Verificar si la respuesta es correcta
    const isCorrect = checkAnswer(answer);
    if (isCorrect) {
      setScore(score + 1);
    }

    // Avanzar a la siguiente pregunta después de 2 segundos
    setTimeout(() => {
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameFinished(true);
      }
    }, 2000);
  };

  // Verificar respuesta según el tipo de pregunta
  const checkAnswer = (answer) => {
    if (!currentQuestion) return false;

    switch (currentQuestion.type) {
      case 'text':
        return answer === currentQuestion.answer;
      case 'image':
        return answer.correct === true;
      default:
        return false;
    }
  };

  // Renderizar opciones según el tipo de pregunta
  const renderOptions = () => {
    if (!currentQuestion) return null;

    switch (currentQuestion.type) {
      case 'text':
        return renderTextOptions();
      case 'image':
        return renderImageOptions();
      default:
        return <div className="unsupported-type">Tipo de pregunta no soportado</div>;
    }
  };

  // Renderizar opciones de texto
  const renderTextOptions = () => {
    return (
      <div className="text-options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${getOptionClass(option)}`}
            onClick={() => handleAnswerSelect(option)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  // Renderizar opciones de imagen
  const renderImageOptions = () => {
    return (
      <div className="image-options">
        {currentQuestion.options.map((option, index) => (
          <div
            key={index}
            className={`image-option ${getImageOptionClass(option)}`}
            onClick={() => handleAnswerSelect(option)}
            style={{ cursor: selectedAnswer !== null ? 'default' : 'pointer' }}
          >
            {hasImageError(option.image) || !option.image ? (
              <div className="image-placeholder">
                <span className="placeholder-text">
                  {option.image ? '(Imagen no disponible)' : '(Imagen no especificada)'}
                </span>
                <span className="placeholder-label">{option.text}</span>
              </div>
            ) : (
              <>
                <img
                  src={option.image}
                  alt={option.text}
                  className="option-image"
                  onError={() => handleImageError(option.image)}
                />
                <span className="image-label">{option.text}</span>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Obtener clase CSS para opción de texto
  const getOptionClass = (option) => {
    if (!showResult) return '';
    
    if (option === selectedAnswer) {
      return option === currentQuestion.answer ? 'correct' : 'incorrect';
    }
    
    if (option === currentQuestion.answer) {
      return 'correct';
    }
    
    return '';
  };

  // Obtener clase CSS para opción de imagen
  const getImageOptionClass = (option) => {
    if (!showResult) return '';
    
    if (option === selectedAnswer) {
      return option.correct ? 'correct' : 'incorrect';
    }
    
    if (option.correct) {
      return 'correct';
    }
    
    return '';
  };

  // Reiniciar el juego
  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
    setImageErrors(new Set());
  };

  // Renderizar pantalla de resultados finales
  if (gameFinished) {
    const percentage = Math.round((score / currentQuestions.length) * 100);
    return (
      <div className="game-screen">
        <div className="game-screen-content">
          <div className="game-results">
            <h1 className="title">¡Juego terminado!</h1>
            <div className="score-summary">
              <div className="final-score">
                <span className="score-number">{score}</span>
                <span className="score-total">/{currentQuestions.length}</span>
              </div>
              <div className="score-percentage">{percentage}%</div>
              <div className="score-message">
                {percentage >= 80 ? '¡Excelente!' : 
                 percentage >= 60 ? '¡Bien hecho!' : 
                 percentage >= 40 ? '¡Puedes mejorar!' : '¡Sigue practicando!'}
              </div>
            </div>
            <button className="restart-button" onClick={restartGame}>
              Jugar de nuevo
            </button>
          </div>
        </div>
        <Footer theme="light" />
      </div>
    );
  }

  // Renderizar mensaje si no hay preguntas disponibles
  if (currentQuestions.length === 0) {
    return (
      <div className="game-screen">
        <div className="game-screen-content">
          <h1 className="title">¡Ups!</h1>
          <div className="no-questions">
            <p>No hay preguntas disponibles para el rango de edad seleccionado.</p>
            <p>Rango: <strong>{selectedAgeRange}</strong></p>
          </div>
        </div>
        <Footer theme="light" />
      </div>
    );
  }

  // Renderizar pregunta actual
  return (
    <div className="game-screen">
      <div className="game-screen-content">
        <div className="game-header">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
            ></div>
          </div>
          <div className="game-info">
            <span className="question-counter">
              {currentQuestionIndex + 1}/{currentQuestions.length}
            </span>
            <span className="score-display">
              Puntaje: {score}
            </span>
          </div>
        </div>

        <div className="question-container">
          <div className="question-header">
            <h2 className="question-text">{currentQuestion.question}</h2>
          </div>
          
          {renderOptions()}
          
          {showResult && (
            <div className="result-feedback">
              {checkAnswer(selectedAnswer) ? (
                <span className="correct-feedback">¡Correcto! 🎉</span>
              ) : (
                <span className="incorrect-feedback">
                  Incorrecto. La respuesta correcta era: {
                    currentQuestion.type === 'text' 
                      ? currentQuestion.answer 
                      : currentQuestion.options.find(opt => opt.correct)?.text
                  }
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      
      <Footer theme="light" />
    </div>
  );
};

export default GameScreen; 