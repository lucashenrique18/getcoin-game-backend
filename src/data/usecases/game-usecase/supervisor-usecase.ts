import { GameModel } from "../../../domain/model/game-model";
import { Supervisor } from "../../../domain/usecases/supervisor";
import { crateDummyCoin } from "../../../utils/dummy-coin";

export class SuperviseGame implements Supervisor {
  constructor(private readonly game: GameModel) {}
  supervise(): void {
    setInterval(() => {
      const newCoin = crateDummyCoin(this.game.rangeX, this.game.rangeY);
      this.game.coins.push(newCoin);
    }, this.game.msCoin);
  }
}
