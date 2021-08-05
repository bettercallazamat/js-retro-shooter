import Phaser from 'phaser';
import Entity from './Entity';
import EnemyShot from './EnemyShot';

export default class EnemySpaceship extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy-spaceship', 'Enemy');

    this.body.velocity.y = Phaser.Math.Between(100, 200);

    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback() {
        const shot = new EnemyShot(this.scene, this.x, this.y);
        shot.setScale(this.scaleX);
        this.scene.enemyShots.add(shot);
      },
      callbackScope: this,
      loop: true,
    });
  }
}
