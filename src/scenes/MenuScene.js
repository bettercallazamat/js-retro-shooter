import 'phaser';
import Button from '../assets/elements/Button'

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    this.gameText = this.add.text(400, 300, 'Play', { fontSize: '32px', fill: '#fff' })
      .setInteractive()
      .setOrigin(0.5, 0.5);

    this.gameText.on('pointerdown', function (pointer) {
      this.scene.start('Game');
    }.bind(this));

    // this.input.on('pointerover', function (event, gameObjects) {
    //   gameObjects[0].setTexture('blueButton2');
    // });

    // this.input.on('pointerout', function (event, gameObjects) {
    //   gameObjects[0].setTexture('blueButton1');
    // });
  }
};