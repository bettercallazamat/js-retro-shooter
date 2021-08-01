import Phaser from 'phaser';
import { getScores } from '../helpers/apiHandler';

export default class TopScene extends Phaser.Scene {
  constructor() {
    super('Top');
  }

  create() {
    this.add.text(400, 100, 'Top 5 players', {
      fontSize: '48px ',
      // fontFamily: 'san-serif',
    }).setOrigin(0.5, 0.5);

    getScores().then((scores) => {
      scores.sort((x, y) => y.score - x.score);
      const space = 50;
      for (let i = 0; i < 5; i += 1) {
        if (scores[i] !== undefined) {
          this.add
            .text(
              400,
              200 + (space * i),
              `${i + 1}. Name: ${scores[i].user} Score: ${scores[i].score}`,
              {
                color: 'white',
                fontSize: '38px ',
              },
            )
            .setOrigin(0.5, 0.5);
        }
      }
    });

    this.keyENTER = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER,
    );
  }

  update() {
    if (this.keyENTER.isDown) {
      this.scene.start('Menu');
    }
  }
}
