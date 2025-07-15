# 🌱 LawnMayhem 3D

Un emocionante juego 3D de esquivar obstáculos desarrollado con Three.js donde controlas una cortadora de césped que debe recoger conejos mientras evita gnomos y piedras.

## Integrantes
- Byron Serrano
- Johannes Carofilis
- Antonio Briones

![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🎮 Descripción del Juego

En LawnMayhem 3D, juegas como una cortadora de césped que se mueve por un jardín infinito. Tu objetivo es recoger la mayor cantidad de conejos posible mientras evitas los obstáculos que pueden dañarte.

### 🎯 Reglas del Juego

#### 🐰 Conejos (Puntos Positivos)
- **Puntos**: +10 por cada conejo recogido
- **Efecto**: Aumenta tu puntuación
- **Estrategia**: ¡Recoge todos los que puedas!

#### 🧙‍♂️ Gnomos (Puntos Negativos)
- **Puntos**: -5 por cada gnomo tocado
- **Efecto**: Reduce tu puntuación
- **Estrategia**: Evítalos cuando sea posible

#### 🪨 Piedras (Daño)
- **Daño**: -10 de vida por cada piedra
- **Efecto**: Reduce tu barra de vida
- **Peligro**: ¡Pueden terminar el juego!

### 🎮 Controles

- **Flecha Izquierda (←)**: Mover cortadora al carril izquierdo
- **Flecha Derecha (→)**: Mover cortadora al carril derecho

### 🎯 Objetivo

- Sobrevivir el mayor tiempo posible
- Obtener la máxima puntuación recogiendo conejos
- Evitar quedarte sin vida por las piedras

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para Ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ByronSerrano/LawnMayhem-3D-JS.git
   cd LawnMayhem-3D-JS
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - Visita `http://localhost:5173` en tu navegador web

### 🏗️ Construir para Producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

## 🛠️ Tecnologías Utilizadas

- **Three.js**: Motor 3D para renderizado y animaciones
- **JavaScript ES6+**: Lógica del juego
- **Vite**: Herramienta de construcción y desarrollo
- **HTML5 Canvas**: Renderizado gráfico
- **CSS3**: Estilos y HUD

## 📁 Estructura del Proyecto

```
LawnMayhem-3D-JS/
├── public/
│   ├── models/          # Modelos 3D (.obj)
│   │   ├── conejo.obj
│   │   ├── gnomo.obj
│   │   ├── lawnmower.obj
│   │   └── piedra.obj
│   └── vite.svg
├── src/
│   ├── main.js          # Archivo principal del juego
│   ├── conejo.js        # Clase Conejo
│   ├── gnomo.js         # Clase Gnomo
│   ├── piedra.js        # Clase Piedra
│   └── style.css
├── index.html           # Archivo HTML principal
├── package.json
└── README.md
```

## 🎮 Características del Juego

### 🌟 Mecánicas Implementadas

- **Sistema de Carriles**: Movimiento entre 3 carriles (-2, 0, +2)
- **Generación Procedural**: Oleadas aleatorias de objetos
- **Sistema de Colisiones**: Detección precisa de colisiones
- **HUD en Tiempo Real**: Puntuación y barra de vida
- **Carga de Modelos 3D**: Modelos OBJ personalizados
- **Iluminación Dinámica**: Luces ambiente y direccional

### 🎯 Sistema de Puntuación

- Puntuación inicial: 0
- Vida inicial: 100
- Game Over cuando la vida llega a 0

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el juego:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 🏆 Autor

**Byron Serrano**
- GitHub: [@ByronSerrano](https://github.com/ByronSerrano)

---

¡Disfruta jugando LawnMayhem 3D! 🎮🌱