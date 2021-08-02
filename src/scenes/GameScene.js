import Phaser from 'phaser';
import Player from '../entities/Player';
import EnemySpaceship from '../entities/EnemySpaceship';

// eslint-disable-next-line import/no-mutable-exports
let score = 0;

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    score = 0;
    this.add.image(400, 300, 'game-bg').setScale(2);

    this.anims.create({
      key: 'enemy-explosion',
      frames: this.anims.generateFrameNumbers('enemy-explosion'),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: 'player-explosion',
      frames: this.anims.generateFrameNumbers('player-explosion'),
      frameRate: 20,
      repeat: 0,
    });

    this.player = new Player(this, 400, 600, 'spaceship-1');

    // SCORE TEXT
    this.playerScore = this.add.text(40, 60, `Score: ${score}`, {
      fontFamily: 'monospace',
      fontSize: 30,
      fontStyle: 'bold',
      color: '#fff',
    });

    // PLAYER SHOOTING
    this.playerShots = this.add.group();

    for (let i = 0; i < this.playerShots.getChildren().length; i += 1) {
      const shot = this.playerShots.getChildren()[i];
      shot.update();

      if (
        shot.x < -shot.displayWidth
        || shot.x > this.game.config.width + shot.displayWidth
        || shot.y < -shot.displayHeight * 4
        || shot.y > this.game.config.height + shot.displayHeight
      ) {
        if (shot) {
          shot.destroy();
        }
      }
    }

    // ENEMY SPAWNING
    this.enemies = this.add.group();

    this.time.addEvent({
      delay: Phaser.Math.Between(500, 2000),
      callback() {
        let enemy = null;
        enemy = new EnemySpaceship(this, Phaser.Math.Between(20, this.game.config.width - 20), 0);

        if (enemy !== null) {
          this.enemies.add(enemy);
        }

        this.physics.add.collider(
          this.playerShots,
          this.enemies,
          (playerShot, enemy) => {
            if (enemy) {
              enemy.explode(true, 'enemy-explosion');
              playerShot.destroy();
              score += 10;
              this.playerScore.setText(`Score: ${score}`);
            }
          },
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
      }
    });
  }

  update() {
    this.player.update();
  }
}

export { GameScene, score };