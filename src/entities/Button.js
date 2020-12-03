import 'phaser';

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, text, scale = 1, fontSize = 30) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    const button = this.scene.add.image(x, y, 'button').setInteractive();
    const buttonText = this.scene.add.bitmapText(x, y, 'pixelFont', text, fontSize);
    Phaser.Display.Align.In.Center(buttonText, button);
    this.add(button);
    this.add(buttonText);
    this.button = button;
    button.setScale(scale, scale);
    button.on('pointerdown', () => {
      button.setTexture('button-clicked');
    });
    button.on('pointerup', () => {
      button.setTexture('button');
    });
    button.on('pointerout', () => {
      button.setTexture('button');
    });
    button.on('pointerover', () => {
      button.setTexture('button-hover');
    });
    this.scene.add.existing(this);
  }
}