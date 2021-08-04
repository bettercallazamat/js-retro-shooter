import 'jest-canvas-mock';
import Phaser from 'phaser';
import BootScene from '../src/scenes/BootScene';
import CreditsScene from '../src/scenes/CreditsScene';
import GameOverScene from '../src/scenes/GameOverScene';
import { GameScene } from '../src/scenes/GameScene';
import MenuScene from '../src/scenes/MenuScene';
import PreloaderScene from '../src/scenes/PreloaderScene';
import TopScene from '../src/scenes/TopScene';
import config from '../src/config'

const startGame = () => {
  config.scene = [
    BootScene,
    CreditsScene,
    GameOverScene,
    GameScene,
    MenuScene,
    PreloaderScene,
    TopScene
  ];

  const game = new Phaser.Game(config);
  return game;
};

export default startGame;