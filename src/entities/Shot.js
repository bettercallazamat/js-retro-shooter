// import 'phaser';

// class Shot extends Phaser.GameObjects.Sprite {
//   constructor(scene, playerPositionX, playerPositionY) {
//     super(scene, playerPositionX + 10, playerPositionY - 100, 'player-fire2');

//     scene.add.existing(this);
//     // this.play('shot_anim');

//     // physics
//     scene.physics.world.enableBody(this);
//     this.body.velocity.y = -250;

//     // add to group
//     scene.shots.add(this);
//   }

//   update() {
//     if (this.y < 100) {
//       this.scene.score.missedShot();
//       this.destroy();
//     }
//   }
// }

// export default Shot;