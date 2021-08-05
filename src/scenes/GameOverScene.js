import Phaser from 'phaser';
import { score } from './GameScene';
import { postScore } from '../helpers/apiHandler';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.text(400, 200, 'GAME OVER', { fontSize: 25, fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setOrigin(0.5);
    this.add.text(400, 280, `Your score: ${score}`, { fontSize: 25, fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setOrigin(0.5);

    this.element = document.getElementById('fname');
    this.element.classList.remove('hidden');

    this.add.text(270, 530, 'Press', { color: 'white', fontSize: '24px' }).setOrigin(0.5, 0.5);
    this.add.image(365, 530, 'enter').setOrigin(0.5, 0.5).setScale(0.3);
    this.add.image(315, 480, 'arrow').setOrigin(0.5, 0.5).setScale(0.07);
    this.add.text(500, 530, 'to get back', { color: 'white', fontSize: '24px' }).setOrigin(0.5, 0.5);
    this.add.text(400, 570, 'to the Main Menu', { color: 'white', fontSize: '24px' }).setOrigin(0.5, 0.5);

    this.keyENTER = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER,
    );
  }

  update() {
    if (this.keyENTER.isDown) {
      const input = document.getElementById('fname').value;
      if (score > 0 && input === '') {
        postScore(input, score);
      }
      this.element.classList.add('hidden');
      this.scene.start('Menu');
    }
  }
}