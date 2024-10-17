<h1>Three.js Spinning Cube</h1>

This is a basic Three.js project that sets up a simple 3D scene with a spinning cube. It serves as an introduction to using Three.js for 3D graphics in the browser.

<h2>Table of Contents</h2>
- Installation
- Usage
- Project Structure
- Features
- Contributing
- License

<h2>Installation</h2>
To get started, you need to have Node.js installed on your machine.

<h3>Clone the repository:</h3>

```bash
git clone https://github.com/AmritRMagar/Three-js.git
cd Three-js
```
<h3>Install dependencies:<h3>

```bash
npm install
```
<h3>Run the development server:</h3>

```bash
npx vite
```

Open http://localhost:5173 in your browser to view the project.

<h2>Project Structure</h2>
The project consists of two main files:

- index.html: Defines the webpage structure and includes the JavaScript file.
- main.js: Contains the JavaScript code that initializes the Three.js scene, camera, - - - renderer, and adds a spinning cube.
- Additional resources, like textures or 3D models, can be placed in the public/ directory.

<h2>Features</h2>
- Three.js Integration: Set up a basic Three.js scene with a camera, renderer, and cube geometry.
- Animation Loop: Uses requestAnimationFrame for smooth animation.
- Responsive Rendering: Adapts to the window size.

<h2>Usage</h2>
To modify the cube's properties, open main.js and adjust the following sections:

- Geometry: Change the shape by modifying BoxGeometry.
- Material: Alter the cube color or replace MeshBasicMaterial with another material type.
- Rotation Speed: Adjust the rotation increments in the animate function.

<h2>Contributing</h2>
If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Contributions are always welcome!

<h2>License</h2>
This project is licensed under the MIT License. See the LICENSE file for more details.