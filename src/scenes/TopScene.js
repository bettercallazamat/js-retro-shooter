import Phaser from 'phaser';
import { getScores } from '../helpers/apiHandler';

export default class TopScene extends Phaser.Scene {
  constructor() {
    super('Top');
  }

  create() {
    this.add.text(400, 100, 'Top 5 players', {
      fontSize: '48px ',
      fontFamily: 'san-serif',
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

    this.add.text(270, 530, `Press`, { color: 'white', fontSize: '24px' }).setOrigin(0.5, 0.5);
    this.add.image(365, 530, 'enter').setOrigin(0.5, 0.5).setScale(0.3);
    this.add.image(315, 480, 'arrow').setOrigin(0.5, 0.5).setScale(0.07);
    this.add.text(500, 530, `to get back`, { color: 'white', fontSize: '24px' }).setOrigin(0.5, 0.5);
    this.add.text(400, 570, `to the Main Menu`, { color: 'white', fontSize: '24px' }).setOrigin(0.5, 0.5);

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
