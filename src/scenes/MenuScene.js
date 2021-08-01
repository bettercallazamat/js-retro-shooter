import 'phaser';
import Button from '../entities/Button'

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    this.add.image(400, 130, 'logo').setScale(0.5)
    this.gameButton = new Button(this, 400, 280, 'Play', 'Game');
    this.topButton = new Button(this, 400, 380, 'The top', 'Top');
    this.credButton = new Button(this, 400, 480, 'Credits', 'Credits');

  }
};