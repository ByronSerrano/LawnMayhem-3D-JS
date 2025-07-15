import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Conejo } from './conejo.js';
import { Gnomo } from './gnomo.js';
import { Piedra } from './piedra.js';

let scene, camera, renderer;
let player, playerX = 0;
let conejos = [], gnomos = [], piedras = [];
let playerModel, conejoModel, gnomoModel, piedraModel;
let lanes = [-2, 0, 2];

let health = 100;
let score = 0;
let gameState = "menu";
let nextWaveZ = -10;

const loader = new OBJLoader();
const clock = new THREE.Clock();

init();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222222);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 4, 7);
  camera.lookAt(0, 0, -5);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  addLights();
  addGround();

  loadModels().then(() => {
    startGame();
    animate();
  });

  window.addEventListener("keydown", handleKey);
}

function addLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  const directional = new THREE.DirectionalLight(0xffffff, 0.8);
  directional.position.set(0, 10, 5);
  scene.add(ambient, directional);
}

function addGround() {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 100),
    new THREE.MeshStandardMaterial({ color: 0x2a8a2a })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.z = -40;
  scene.add(ground);
}

async function loadModels() {
  const playerData = await loader.loadAsync('/models/lawnmower.obj');
  playerModel = playerData;

  const conejoData = await loader.loadAsync('/models/conejo.obj');
  conejoModel = conejoData;

  const gnomoData = await loader.loadAsync('/models/gnomo.obj');
  gnomoModel = gnomoData;

  const piedraData = await loader.loadAsync('/models/piedra.obj');
  piedraModel = piedraData;
}


function startGame() {
  gameState = "juego";
  score = 0;
  health = 100;
  player = playerModel.clone();
  player.position.set(0, 0.5, -1);
  scene.add(player);
}

function generateWave(zPos) {
  const options = ["conejo", "gnomo", "piedra"];
  const shuffledLanes = [...lanes].sort(() => Math.random() - 0.5);

  for (let i = 0; i < 3; i++) {
    const type = options.splice(Math.floor(Math.random() * options.length), 1)[0];
    const lane = shuffledLanes[i];
    if (type === "conejo") {
      const c = new Conejo(lane, zPos, conejoModel);
      c.addToScene(scene);
      conejos.push(c);
    } else if (type === "gnomo") {
      const g = new Gnomo(lane, zPos, gnomoModel);
      g.addToScene(scene);
      gnomos.push(g);
    } else if (type === "piedra") {
      const p = new Piedra(lane, zPos, piedraModel);
      p.addToScene(scene);
      piedras.push(p);
    }
  }
  nextWaveZ -= 6;
}

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  if (gameState === "juego") updateGame(delta);
  renderer.render(scene, camera);
}

function updateGame(dt) {
  const speed = 4 * dt;

  if ([...conejos, ...gnomos, ...piedras].every(e => e.z > -30)) {
    generateWave(nextWaveZ);
  }

  for (const c of conejos) {
    c.update(speed);
    if (c.checkCollision(playerX, -1)) {
      score += 10;
      c.removeFromScene(scene);
    }
  }

  for (const g of gnomos) {
    g.update(speed);
    if (g.checkCollision(playerX, -1)) {
      score -= 5;
      g.removeFromScene(scene);
    }
  }

  for (const p of piedras) {
    p.update(speed);
    if (p.checkCollision(playerX, -1)) {
      health -= 10;
      p.removeFromScene(scene);
    }
  }

  // Limpiar objetos que pasaron por detrás del jugador
  conejos.forEach(c => {
    if (c.z > 2) {
      c.removeFromScene(scene);
    }
  });
  gnomos.forEach(g => {
    if (g.z > 2) {
      g.removeFromScene(scene);
    }
  });
  piedras.forEach(p => {
    if (p.z > 2) {
      p.removeFromScene(scene);
    }
  });

  conejos = conejos.filter(c => c.alive && c.z <= 2);
  gnomos = gnomos.filter(g => !g.hit && g.z <= 2);
  piedras = piedras.filter(p => !p.hit && p.z <= 2);

  document.getElementById("score").textContent = `Puntos: ${score}`;
  document.getElementById("health").style.width = `${Math.max(0, health)}%`;

  if (health <= 0) {
    alert("GAME OVER\nPuntaje final: " + score);
    window.location.reload();
  }
}

function handleKey(e) {
  if (gameState !== "juego") return;

  if (e.key === "ArrowLeft" && playerX > -2) {
    playerX -= 2;
    player.position.x = playerX;
  } else if (e.key === "ArrowRight" && playerX < 2) {
    playerX += 2;
    player.position.x = playerX;
  }
}
