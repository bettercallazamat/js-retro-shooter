import 'phaser';
import Button from '../entities/Button'

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    this.gameText = this.add.text(400, 300, 'Play', { fontSize: '32px', fill: '#fff' })
      .setInteractive()
      .setOrigin(0.5, 0.5);
    }
    
  update() {
    this.gameText.on('pointerdown', function (pointer) {
      this.scene.start('Game');
    }.bind(this));
  }
};