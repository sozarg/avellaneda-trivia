const questions = {
  '8-11': [
    {
      id: 1,
      question: '¿Cuál es la capital de Argentina?',
      type: 'text',
      options: ['Buenos Aires', 'Córdoba', 'Neuquén', 'San Luis'],
      answer: 'Buenos Aires'
    },
    {
      id: 2,
      question: '¿Cuál es el animal típico de Argentina?',
      type: 'text',
      options: ['Llama', 'Cóndor', 'Hornero', 'Jaguar'],
      answer: 'Hornero'
    },
    {
      id: 3,
      question: '¿Quién es Manuel Belgrano?',
      type: 'image',
      options: [
        { image: '/images/belgrano.jpg', text: 'Manuel Belgrano', correct: true },
        { image: '/images/sanmartin.jpg', text: 'José de San Martín', correct: false },
        { image: '/images/rosas.jpg', text: 'Juan Manuel de Rosas', correct: false },
        { image: '/images/sarmiento.jpg', text: 'Domingo Faustino Sarmiento', correct: false }
      ]
    },
    {
      id: 4,
      question: '¿Cuál es el color de la bandera argentina?',
      type: 'text',
      options: ['Azul y blanco', 'Verde y amarillo', 'Rojo y blanco', 'Azul y rojo'],
      answer: 'Azul y blanco'
    }
  ],
  '12-15': [
    {
      id: 5,
      question: '¿En qué año se declaró la independencia de Argentina?',
      type: 'text',
      options: ['1810', '1816', '1820', '1825'],
      answer: '1816'
    },
    {
      id: 6,
      question: '¿Cuál es la moneda de Argentina?',
      type: 'text',
      options: ['Peso', 'Dólar', 'Euro', 'Real'],
      answer: 'Peso'
    },
    {
      id: 7,
      question: '¿Quién fue el primer presidente de Argentina?',
      type: 'image',
      options: [
        { image: '/images/rivadavia.jpg', text: 'Bernardino Rivadavia', correct: true },
        { image: '/images/belgrano.jpg', text: 'Manuel Belgrano', correct: false },
        { image: '/images/sanmartin.jpg', text: 'José de San Martín', correct: false },
        { image: '/images/moreno.jpg', text: 'Mariano Moreno', correct: false }
      ]
    },
    {
      id: 8,
      question: '¿Cuál es el río más largo de Argentina?',
      type: 'text',
      options: ['Río Paraná', 'Río Uruguay', 'Río de la Plata', 'Río Colorado'],
      answer: 'Río Paraná'
    }
  ],
  '16-17': [
    {
      id: 9,
      question: '¿Cuál fue la causa principal de la Revolución de Mayo?',
      type: 'text',
      options: [
        'La invasión napoleónica a España',
        'La independencia de Estados Unidos',
        'La Revolución Francesa',
        'La guerra con Brasil'
      ],
      answer: 'La invasión napoleónica a España'
    },
    {
      id: 10,
      question: '¿Qué provincias formaron la Liga Federal?',
      type: 'text',
      options: [
        'Entre Ríos, Corrientes, Misiones y Santa Fe',
        'Buenos Aires, Córdoba y Santa Fe',
        'Mendoza, San Juan y San Luis',
        'Salta, Jujuy y Tucumán'
      ],
      answer: 'Entre Ríos, Corrientes, Misiones y Santa Fe'
    },
    {
      id: 11,
      question: '¿Quién fue Juan Domingo Perón?',
      type: 'image',
      options: [
        { image: '/images/peron.jpg', text: 'Juan Domingo Perón', correct: true },
        { image: '/images/yrigoyen.jpg', text: 'Hipólito Yrigoyen', correct: false },
        { image: '/images/roca.jpg', text: 'Julio Argentino Roca', correct: false },
        { image: '/images/alfonsin.jpg', text: 'Raúl Alfonsín', correct: false }
      ]
    },
    {
      id: 12,
      question: '¿En qué año se sancionó la Constitución Nacional?',
      type: 'text',
      options: ['1853', '1860', '1880', '1916'],
      answer: '1853'
    }
  ],
  '18+': [
    {
      id: 13,
      question: '¿Cuál fue el objetivo principal del Plan de Operaciones de Mariano Moreno?',
      type: 'text',
      options: [
        'Establecer un gobierno republicano y democrático',
        'Crear una monarquía constitucional',
        'Mantener la dependencia de España',
        'Formar una confederación con Brasil'
      ],
      answer: 'Establecer un gobierno republicano y democrático'
    },
    {
      id: 14,
      question: '¿Qué caracterizó al modelo agroexportador argentino?',
      type: 'text',
      options: [
        'Exportación de materias primas e importación de productos manufacturados',
        'Desarrollo de la industria pesada',
        'Economía basada en la minería',
        'Comercio exclusivo con países limítrofes'
      ],
      answer: 'Exportación de materias primas e importación de productos manufacturados'
    },
    {
      id: 15,
      question: '¿Quién fue Domingo Faustino Sarmiento?',
      type: 'image',
      options: [
        { image: '/images/sarmiento.jpg', text: 'Domingo Faustino Sarmiento', correct: true },
        { image: '/images/mitre.jpg', text: 'Bartolomé Mitre', correct: false },
        { image: '/images/avellaneda.jpg', text: 'Nicolás Avellaneda', correct: false },
        { image: '/images/roca.jpg', text: 'Julio Argentino Roca', correct: false }
      ]
    },
    {
      id: 16,
      question: '¿Cuál fue la consecuencia más importante de la Ley Sáenz Peña?',
      type: 'text',
      options: [
        'Estableció el voto secreto, universal y obligatorio',
        'Creó el sistema educativo nacional',
        'Implementó la inmigración masiva',
        'Estableció la separación Iglesia-Estado'
      ],
      answer: 'Estableció el voto secreto, universal y obligatorio'
    }
  ]
};

export default questions; 