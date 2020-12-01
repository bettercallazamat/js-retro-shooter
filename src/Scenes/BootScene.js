import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'src/assets/ui/down-bubble.png');
  }

  create() {
    this.scene.start('Preloader');
  }
};