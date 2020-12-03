import 'phaser';
import Entity from './Entity';
import PlayerShot from './PlayerShot';

export default class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, 'Player');
    this.setData('speed', 200);
    //Shooting state info
    this.setData('isShooting', false);
    this.setData('timerShootDelay', 10);
    this.setData('timerShootTick', this.getData('timerShootDelay') - 1);
    this.body.setCollideWorldBounds(true);
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    // MOVEMENTS
    let speed = this.getData('speed')
    if (this.cursors.left.isDown) {
      this.body.setVelocity(-speed, 0);
    } else if (this.cursors.right.isDown) {
      this.body.setVelocity(speed, 0);
    } else if (this.cursors.up.isDown) {
      this.body.setVelocity(0, -speed);
    } else if (this.cursors.down.isDown) {
      this.body.setVelocity(0, speed);
    } else {
      this.body.setVelocity(0, 0);
    }

    //          //
    // SHOOTING //
    //          //
    this.keySpace = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    )

    if (this.keySpace.isDown) {
      this.setData('isShooting', true);
    } else {
      this.setData('timerShootTick', this.getData('timerShootDelay') - 1);
      this.setData('isShooting', false);
    }

    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);

    if (this.getData('isShooting')) {
      if (this.getData('timerShootTick') < this.getData('timerShootDelay')) {
        this.setData('timerShootTick', this.getData('timerShootTick') + 1);
      } else {
        const shot = new PlayerShot(this.scene, this.x, this.y - 50);
        this.scene.playerShots.add(shot);
        this.setData('timerShootTick', 0);
      }
    }
  }

  // Events on destroy //
  onDestroy() {
    this.scene.time.addEvent({
      delay: 1000,
      callback() {
        this.scene.scene.start('Score');
      },
      callbackScope: this,
      loop: false,
    });
  };
}



