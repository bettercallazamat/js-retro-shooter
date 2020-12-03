import 'phaser';
import Player from '../entities/Player'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.add.image(400, 300, 'game-bg').setScale(2);
    
    this.player = new Player(this, 400, 600, 'spaceship-1');





    this.playerShot = this.add.group();

    for (let i = 0; i < this.playerShot.getChildren().length; i += 1) {
      const shot = this.playerShot.getChildren()[i];
      shot.update();

      if (
        shot.x < -shot.displayWidth ||
        shot.x > this.game.config.width + shot.displayWidth ||
        shot.y < -shot.displayHeight * 4 ||
        shot.y > this.game.config.height + shot.displayHeight
      ){
        if (shot) {
          shot.destroy();
        }
      }
    }

    this.keySpace = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    )
    
  }

  update() {
    this.player.movements();
    this.player.update();

    if (this.keySpace.isDown) {
      this.player.setData('isShooting', true);
      console.log(this.player.getData('isShooting'))
    } else {
      this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
      this.player.setData('isShooting', false);
    }
  }
};