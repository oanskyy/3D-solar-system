import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Pane } from "tweakpane"

// initialize pane
const pane = new Pane()

// initialize the scene
const scene = new THREE.Scene()

// add stuff here
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const sunMaterial = new THREE.MeshBasicMaterial({
	color: 0xfff700
})
const earthMaterial = new THREE.MeshBasicMaterial({ color: "blue" })
const moonMaterial = new THREE.MeshBasicMaterial({ color: "grey" })

const sun = new THREE.Mesh(sphereGeometry, sunMaterial)
sun.scale.setScalar(5)

const earth = new THREE.Mesh(sphereGeometry, earthMaterial)
earth.position.x = 10

const moon = new THREE.Mesh(sphereGeometry, moonMaterial)
moon.scale.setScalar(0.3)
moon.position.x = 2

scene.add(sun)
scene.add(earth)
earth.add(moon)

// initialize the camera
const camera = new THREE.PerspectiveCamera(
	35,
	window.innerWidth / window.innerHeight,
	0.1,
	400
)
camera.position.z = 100
camera.position.y = 5

// initialize the renderer
const canvas = document.querySelector("canvas.threejs")
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// add controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.maxDistance = 200
controls.minDistance = 20

// add resize listener
window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
})

// initialize clock
const clock = new THREE.Clock()

// render loop
const renderloop = () => {
	const elapsedTime = clock.getElapsedTime()

	// add animation here
	earth.rotation.y += 0.01

	earth.position.x = Math.sin(elapsedTime) * 10
	earth.position.z = Math.cos(elapsedTime) * 10

	moon.position.x = Math.sin(elapsedTime) * 2
	moon.position.z = Math.cos(elapsedTime) * 2

	controls.update()
	renderer.render(scene, camera)
	window.requestAnimationFrame(renderloop)
}

renderloop()
