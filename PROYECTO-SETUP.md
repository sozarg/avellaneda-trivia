# Trivia de Avellaneda - Configuración del Proyecto

## Estructura del Proyecto

```
avellaneda-trivia/
├── src/
│   ├── assets/
│   │   └── book-walk.json
│   ├── components/
│   │   └── book-walk.json
│   ├── pages/
│   │   ├── StartScreen.jsx
│   │   └── StartScreen.css
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Archivos Creados

### 1. **src/styles/globals.css**
- Reset básico de CSS
- Variables CSS definidas:
  - `--color-primary: #A6CA6A`
  - `--color-secondary: #F8FDF5`
- Estilos globales para botones e imágenes

### 2. **src/pages/StartScreen.jsx**
- Componente principal de la pantalla de inicio
- Integra la animación Lottie usando `lottie-react`
- Incluye el título "¿Cuánto sabés de Avellaneda?"
- Tres botones principales: "Jugar ahora", "Instrucciones", "Premios"

### 3. **src/pages/StartScreen.css**
- Estilos específicos para la pantalla de inicio
- Layout centrado vertical y horizontalmente
- Diseño mobile-first con media queries
- Efectos hover y active en botones

## Archivos Eliminados

- `src/App.css` - Estilos por defecto de Vite
- `src/index.css` - Estilos por defecto de Vite
- `src/assets/react.svg` - Logo de React por defecto

## Archivos Modificados

### 1. **src/main.jsx**
- Cambiado import de `./index.css` a `./styles/globals.css`

### 2. **src/App.jsx**
- Eliminado todo el contenido por defecto
- Importa y renderiza `StartScreen`

## Integración de Lottie

### Instalación
```bash
npm install lottie-react
```

### Uso en el Código
```jsx
import Lottie from 'lottie-react';
import bookWalkAnimation from '../assets/book-walk.json';

<Lottie
  animationData={bookWalkAnimation}
  loop={true}
  autoplay={true}
  style={{ width: '300px', height: '300px' }}
/>
```

## Archivos Pendientes

⚠️ **IMPORTANTE**: Necesitas copiar los siguientes archivos a `src/assets/`:
- `book-walk.json` - Animación principal para la pantalla de inicio
- `book-idle.json` - Animación secundaria (para uso futuro)

Actualmente hay un archivo placeholder en `src/assets/book-walk.json` que muestra un rectángulo giratorio verde.

## Cómo Probar el Proyecto

1. **Instalar dependencias** (si no se hizo):
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador** - El proyecto se abrirá en `http://localhost:5173`

## Características

- ✅ **Diseño Mobile-First**: Responsive design que funciona bien en dispositivos móviles
- ✅ **Animaciones Lottie**: Integración completa con `lottie-react`
- ✅ **Variables CSS**: Colores definidos como variables CSS reutilizables
- ✅ **Layout Centrado**: Diseño centrado vertical y horizontalmente
- ✅ **Efectos Interactivos**: Botones con efectos hover y active
- ✅ **Tipografía Moderna**: Fuente del sistema optimizada para legibilidad

## Próximos Pasos

1. Reemplazar el archivo `book-walk.json` con tu animación real
2. Agregar funcionalidad a los botones
3. Crear páginas adicionales para instrucciones y premios
4. Implementar la lógica del juego de trivia 