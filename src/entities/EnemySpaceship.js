import Phaser from 'phaser';
import Entity from './Entity';

export default class EnemySpaceship extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy-spaceship', 'Enemy');

    this.body.velocity.y = Phaser.Math.Between(100, 200);
  }
}
