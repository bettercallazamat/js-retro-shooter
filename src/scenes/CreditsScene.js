import Phaser from 'phaser';
import { linkedInOpener, gitHubOpener } from '../helpers/linkHelper';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  preload() {
    this.load.image('linkedin', 'src/assets/socials/linkedin.png');
    this.load.image('github', 'src/assets//socials/github.png');
  }

  create() {
    this.add.text(400, 200, 'This game was inspired by ASTRO WARRIOR by SEGA', { fontSize: 25, fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setOrigin(0.5);
    this.add.text(400, 250, 'Developed by Azamat Nuriddinov', { fontSize: 25, fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setOrigin(0.5);

    const linkedInBtn = this.add.image(300, 350, 'linkedin').setInteractive();
    const githubBtn = this.add.image(500, 350, 'github').setInteractive().setScale(0.9);

    this.add.text(270, 530, `Press`, { color: 'white', fontSize: '24px' }).setOrigin(0.5, 0.5);
    this.add.image(365, 530, 'enter').setOrigin(0.5, 0.5).setScale(0.3);
    this.add.image(315, 480, 'arrow').setOrigin(0.5, 0.5).setScale(0.07);
    this.add.text(500, 530, `to get back`, { color: 'white', fontSize: '24px' }).setOrigin(0.5, 0.5);
    this.add.text(400, 570, `to the Main Menu`, { color: 'white', fontSize: '24px' }).setOrigin(0.5, 0.5);

    linkedInBtn.on('pointerdown', linkedInOpener, this);
    githubBtn.on('pointerdown', gitHubOpener, this);

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