import 'phaser';
import Player from '../entities/Player'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.add.image(400, 300, 'game-bg').setScale(2);
    
    this.player = new Player(this);





    this.playerShot = this.add.group();
    
  }

  update() {
    this.player.movements();
  }
};