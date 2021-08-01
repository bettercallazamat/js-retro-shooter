import 'phaser';
import Player from '../entities/Player'
import EnemySpaceship from '../entities/EnemySpaceship'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.add.image(400, 300, 'game-bg').setScale(2);
    
    this.anims.create({
      key: 'enemy-explosion',
      frames: this.anims.generateFrameNumbers('enemy-explosion'),
      frameRate: 20,
      repeat: 0,
    });

    this.player = new Player(this, 400, 600, 'spaceship-1');





    this.playerShots = this.add.group();

    for (let i = 0; i < this.playerShots.getChildren().length; i += 1) {
      const shot = this.playerShots.getChildren()[i];
      shot.update();

      if (
        shot.x < -shot.displayWidth ||
        shot.x > this.game.config.width + shot.displayWidth ||
        shot.y < -shot.displayHeight * 4 ||
        shot.y > this.game.config.height + shot.displayHeight
      ){
        if (shot) {
          shot.destroy();
        }
      }
    }

    //                //
    // ENEMY SPAWNING //
    //                //
    this.enemies = this.add.group();

    this.time.addEvent({
      delay: Phaser.Math.Between(500, 2000),
      callback() {
        // This anonymous function spawns the enemies...
        let enemy = null;
        enemy = new EnemySpaceship(this, Phaser.Math.Between(20, this.game.config.width - 20), 0);

        if (enemy !== null) {
          this.enemies.add(enemy);
        };
    
        this.physics.add.collider(
          this.playerShots,
          this.enemies,
          (playerShot, enemy) => {
            if (enemy) {
              // console.log(playerShot, enemy);
              enemy.explode(true, 'enemy-explosion');
              playerShot.destroy();
            }
          }
        );
      },
      callbackScope: this,
      loop: true,
    });

    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      if (!player.getData('isDead') && !enemy.getData('isDead')) {
        player.explode(false, 'player-explosion');
        player.onDestroy();
        enemy.explode(true, 'enemy-explosion');
        // this.sys.game.globals.score = this.score;
      }
    });


    
  }

  update() {
    this.player.update();
    
  }
};