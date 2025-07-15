import * as THREE from 'three';

export class Gnomo {
  constructor(x, z, model) {
    this.mesh = model.clone();
    this.mesh.position.set(x, 0.5, z);
    this.hit = false;
    this.x = x;
    this.z = z;
  }

  update(speed) {
    this.mesh.position.z += speed;
    this.z = this.mesh.position.z;
  }

  checkCollision(playerX, zLimit = -1, xRange = 0.5) {
    if (!this.hit && this.z >= zLimit && this.z <= 0 && Math.abs(this.x - playerX) < xRange) {
      this.hit = true;
      return true;
    }
    return false;
  }

  addToScene(scene) {
    scene.add(this.mesh);
  }

  removeFromScene(scene) {
    scene.remove(this.mesh);
  }
}
