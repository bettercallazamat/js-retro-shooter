import 'phaser';
import './assets/styles/styles.css';
import config from './config';
import BootScene from './scenes/BootScene';
import CreditsScene from './scenes/CreditsScene';
import GameOverScene from './scenes/GameOverScene';
import {GameScene} from './scenes/GameScene';
import MenuScene from './scenes/MenuScene';
import PreloaderScene from './scenes/PreloaderScene';
import TopScene from './scenes/TopScene';


class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Menu', MenuScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Top', TopScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();