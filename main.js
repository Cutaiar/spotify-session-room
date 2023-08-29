import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );


// Load models
const loader = new GLTFLoader();
loader.load( './public/session.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );

// Lights
const light = new THREE.AmbientLight( 0xffffff ); // soft white light
light.intensity = 5
scene.add( light );
// Camera
camera.position.z = 5;

//Action
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();