import Entity from './Entity';

export default class PlayerShot extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'player-fire1');
    this.body.velocity.y = -200;
  }
}
