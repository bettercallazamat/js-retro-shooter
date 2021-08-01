import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    // add logo image
    this.add.image(400, 100, 'logo').setScale(0.5);

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image('menu-bg', 'src/assets/menu-bg.jpg');
    this.load.image('game-bg', 'src/assets/game-bg.jpg');
    this.load.image('player-fire1', 'src/assets/player/fire1.png');
    this.load.image('button', 'src/assets/button.png');

    this.load.spritesheet('spaceship-1', 'src/assets/player/spaceship-1.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('player-fire2', 'src/assets/player/fire2.png', { frameWidth: 100 });
    this.load.spritesheet('player-explosion', 'src/assets/explosions/explosion1.png', { frameWidth: 200 });

    this.load.spritesheet('enemy-spaceship', 'src/assets/enemies/enemy1.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('enemy-explosion', 'src/assets/explosions/explosion1.png', { frameWidth: 64 });
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    while (this.readyCount < 3) {
      this.readyCount += 1;
    }

    if (this.readyCount === 3) {
      this.scene.start('Menu');
    }
  }
}
