import 'phaser';

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, text, targetScene) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.button = this.scene.add.sprite(0, 0, 'button').setInteractive().setScale(0.2);
    this.text = this.scene.add.text(0, 0, text, { fontSize: '18px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => {
      this.scene.scene.start(targetScene);
    });

    this.button.on('pointerover', () => {
      this.text.setTint(0x00FFFF);
    });

    this.button.on('pointerout', () => {
      this.text.setTint(0xffffff);
    });

    this.scene.add.existing(this);
  }
}