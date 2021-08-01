import 'phaser';
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

    var linkedInBtn = this.add.image(300, 350, 'linkedin').setInteractive();
    var githubBtn = this.add.image(500, 350, 'github').setInteractive().setScale(0.9);

    linkedInBtn.on('pointerdown', linkedInOpener, this);
    githubBtn.on('pointerdown', gitHubOpener, this);
  }
};