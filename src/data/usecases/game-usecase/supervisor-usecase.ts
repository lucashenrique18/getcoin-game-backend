import { GameModel } from "../../../domain/model/game-model";
import { Supervisor } from "../../../domain/usecases/supervisor";

export class SuperviseGame implements Supervisor {
  constructor(private readonly game: GameModel) {}
  supervise(): void {
    setInterval(() => {
      const players = this.game.players;
      const coins = this.game.coins;
      const range = { x: this.game.rangeX, y: this.game.rangeY };
      const maxPoints = this.game.maxPoints;
    }, this.game.msCoin);
  }
}
