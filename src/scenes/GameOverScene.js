import 'phaser';
import { score } from './GameScene'
import { postScore } from '../helpers/apiHandler'

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.text(400, 200, 'GAME OVER', { fontSize: 25, fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setOrigin(0.5);
    this.add.text(400, 280, `Your score: ${score}`, { fontSize: 25, fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setOrigin(0.5);
    
    this.element = document.getElementById('fname');
    this.element.classList.remove('hidden');

    this.keyENTER = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER,
    );
  }

  update() {
    if (this.keyENTER.isDown) {
      const input = document.getElementById('fname').value;
      if (score > 0) {
        postScore(input, score);
      }
      this.element.classList.add('hidden');
      score = 0;
      this.scene.start('Menu');
    }
  }
};