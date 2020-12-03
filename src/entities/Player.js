import 'phaser';
import Entity from './Entity'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, 400, 550, 'spaceship-1');
    this.scene.add.existing(this);

    scene.physics.world.enableBody(this, 0);
    this.body.setCollideWorldBounds(true);
    this.body.setVelocityY(-200);
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  movements() {
    if (this.cursors.left.isDown) {
      this.body.setVelocity(-160, 0);
    } else if (this.cursors.right.isDown) {
      this.body.setVelocity(160, 0);
    } else if (this.cursors.up.isDown) {
      this.body.setVelocity(0, -160);
    } else if (this.cursors.down.isDown) {
      this.body.setVelocity(0, 160);
    } else {
      this.body.setVelocity(0, 0);
    }
  }
}

