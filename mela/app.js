// Bismillahirahmanirahim
// Elhamdulillahi rabbil 'alamin
// Esselatu vesselamu 'ala nabiina muhammadin
// SuphanAllahi wa bihamdihi, subhanallahil azim
// La hawla wa la quwwata illa billahi al 'aliyyil azim
// la ilaha illallahu wahdahu la sharika lahu, lahul mulku wa lahul hamdu wa huwa 'ala kulli shay'in qadir
import * as THREE from "https://unpkg.com/three@0.160.1/build/three.module.js";

const canvas = document.getElementById("scene");
const statusEl = document.getElementById("status");
const helpPanel = document.getElementById("helpPanel");
const helpToggle = document.getElementById("helpToggle");
const webglError = document.getElementById("webglError");

const playBtn = document.getElementById("playBtn");
const solveBtn = document.getElementById("solveBtn");
const exitBtn = document.getElementById("exitBtn");

const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
if (!gl) {
  const ctx2d = canvas.getContext("2d");
  statusEl.textContent = "WebGL tuneye. Nîşandana 2D tê bikaranîn.";
  webglError.classList.remove("hidden");

  const drawFallback = () => {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height || !ctx2d) {
      return;
    }
    canvas.width = Math.floor(width * (window.devicePixelRatio || 1));
    canvas.height = Math.floor(height * (window.devicePixelRatio || 1));
    ctx2d.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);

    ctx2d.clearRect(0, 0, width, height);
    ctx2d.fillStyle = "rgba(12, 18, 32, 0.6)";
    ctx2d.fillRect(0, 0, width, height);

    const size = Math.min(width, height) * 0.35;
    const x = width * 0.5;
    const y = height * 0.55;
    const offset = size * 0.35;

    ctx2d.strokeStyle = "#e8edf7";
    ctx2d.lineWidth = 2;
    ctx2d.beginPath();
    ctx2d.rect(x - size * 0.5, y - size * 0.5, size, size);
    ctx2d.stroke();

    ctx2d.beginPath();
    ctx2d.rect(x - size * 0.5 + offset, y - size * 0.5 - offset, size, size);
    ctx2d.stroke();

    ctx2d.beginPath();
    ctx2d.moveTo(x - size * 0.5, y - size * 0.5);
    ctx2d.lineTo(x - size * 0.5 + offset, y - size * 0.5 - offset);
    ctx2d.moveTo(x + size * 0.5, y - size * 0.5);
    ctx2d.lineTo(x + size * 0.5 + offset, y - size * 0.5 - offset);
    ctx2d.moveTo(x - size * 0.5, y + size * 0.5);
    ctx2d.lineTo(x - size * 0.5 + offset, y + size * 0.5 - offset);
    ctx2d.moveTo(x + size * 0.5, y + size * 0.5);
    ctx2d.lineTo(x + size * 0.5 + offset, y + size * 0.5 - offset);
    ctx2d.stroke();
  };

  window.addEventListener("resize", () => requestAnimationFrame(drawFallback));
  requestAnimationFrame(drawFallback);
  return;
}

const renderer = new THREE.WebGLRenderer({ canvas, context: gl, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
camera.position.set(3.2, 2.8, 3.2);

const ambient = new THREE.AmbientLight(0xffffff, 0.7);
const dir = new THREE.DirectionalLight(0xffffff, 0.8);
dir.position.set(4, 6, 5);
scene.add(ambient, dir);

const cubeGroup = new THREE.Group();
const colors = [
  0x37d680,
  0x6fb3ff,
  0xff5a5a,
  0xffc45a,
  0xf7ff75,
  0xffffff,
];

const material = colors.map(
  (color) =>
    new THREE.MeshStandardMaterial({
      color,
      metalness: 0.2,
      roughness: 0.35,
    })
);

const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
const cube = new THREE.Mesh(geometry, material);
cubeGroup.add(cube);
scene.add(cubeGroup);

let running = true;
let rotationSpeed = 0.6;

function resize() {
  const { width, height } = canvas.getBoundingClientRect();
  if (!width || !height) {
    return;
  }
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

window.addEventListener("resize", () => requestAnimationFrame(resize));
requestAnimationFrame(resize);

let lastTime = 0;
function animate(time = 0) {
  const delta = (time - lastTime) / 1000;
  lastTime = time;

  if (running) {
    cubeGroup.rotation.y += delta * rotationSpeed;
    cubeGroup.rotation.x += delta * rotationSpeed * 0.6;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

playBtn.addEventListener("click", () => {
  running = !running;
  statusEl.textContent = running ? "Blîze: hereketê dest pê kir." : "Blîze: wisa rawestî.";
  playBtn.textContent = running ? "Blîze" : "Rawestîne";
});

solveBtn.addEventListener("click", () => {
  cubeGroup.rotation.set(0, 0, 0);
  statusEl.textContent = "Çêbike: cube bi şiklê dest pê hat vegerandin.";
});

exitBtn.addEventListener("click", () => {
  statusEl.textContent = "Derkeve: ji webê derçûyî (pêdivî ye tab bibîxî).";
});

helpToggle.addEventListener("click", () => {
  helpPanel.classList.toggle("hidden");
});
// Elhamdulîllahi rabbil 'alemin-i Kuddus-i Rezzak-i Rahman-i Rahim-i Melik-i Mülk-i Hamid-i Muhyi ve Mumit-i Azim-i Celil-i Rabbil 'alemin-i Ekrem 
// Elhamdulîllahi rabbil 'alemin 
// Elhamdulîllahi rabbil 'alemin
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulîllahi rabbil 'alemin 
// La ilaha illallahu wahdahu la sharika lahu, lahul mulku wa lahul hamdu yuhyi wa yumitu wa huwa ala kulli shay'in qadir
