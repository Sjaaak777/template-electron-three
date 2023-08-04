'strict'


console.log(THREE);

import { Cube } from '../models/cube.js';

console.log(Cube);

// create a scene with a orange cube and a blue cube that rotates
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// create cubes
const cube2 = new Cube(0, 0, 0, 0xffa500);
const cube3 = new Cube(2, 0, 0, 0x00ff00);
const cube1 = new Cube(-2, 0, 0, 0xff0000);

// add cubes to the scene
scene.add(cube1.mesh);
scene.add(cube2.mesh);
scene.add(cube3.mesh);

// add a light source
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
light.castShadow = true; // Enable shadow casting for the light source
scene.add(light);

// make the cubes visible
camera.position.z = 5;

// create a floor
const floorGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xd3d3d3 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1;
floor.receiveShadow = true;
scene.add(floor);

// create a renderer and add it to the html
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// flag to indicate if the cube should stop rotating
let stopRotation = false;

// add event listener to the orange cube
document.addEventListener('keydown', (event) => {
        if (event.key === 's') {
                stopRotation = !stopRotation;
        }
});

// render the scene
function animate() {
        requestAnimationFrame(animate);
        if (!stopRotation) {
                cube1.rotate();
                cube2.rotate();
                cube3.rotate();
        } else {
                // Gradually decrease the rotation speed until it stops
                cube1.stopRotation();
                cube2.stopRotation();
                cube3.stopRotation();
        }
        renderer.render(scene, camera);
}
animate();
