import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Set up the camera with a 75-degree field of view, aspect ratio matching the window, and near/far clipping planes.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create the renderer and set its size
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the HTML document
document.body.appendChild(renderer.domElement);

// Create a cube geometry and a basic green material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Animation loop function
function animate() {
  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene from the perspective of the camera
  renderer.render(scene, camera);
}

// Set the animation loop
renderer.setAnimationLoop(animate);
