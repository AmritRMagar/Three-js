import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { color, emissive } from 'three/webgpu';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0')

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({color: '#468585'});
const cube = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1 , 2);
const boxMaterial = new THREE.MeshBasicMaterial({color: '#B4B4B3'});
const box = new THREE.Mesh(boxGeometry,boxMaterial);
box.position.y = -1.5;

scene.add(cube);
scene.add(box);

const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);

camera.position.z = 5;

function animate() {

    cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  box.rotation.y += 0.005;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);


const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;
