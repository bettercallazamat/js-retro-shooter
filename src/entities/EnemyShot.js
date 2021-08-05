import Entity from './Entity';

class EnemyShot extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy-fire1');
    this.body.velocity.y = 200;
  }
}

export default EnemyShot;
