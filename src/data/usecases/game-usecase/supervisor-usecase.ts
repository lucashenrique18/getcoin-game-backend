import { GameModel } from "../../../domain/model/game-model";
import { Supervisor } from "../../../domain/usecases/supervisor";
import { crateDummyCoin } from "../../../utils/dummy-coin";
import sleep from "../../../utils/sleep";

export class SupervisorUseCase implements Supervisor {
  constructor(private readonly game: GameModel) {}
  async supervise(): Promise<void> {
    setTimeout(() => {
      this.game.isStarted = false;
    }, this.game.maxTime);
    const coinInterval = setInterval(() => {
      coinMaker();
    }, this.game.msCoin);
    const coinMaker = () => {
      if (this.game.isStarted) {
        const newCoin = crateDummyCoin(this.game.rangeX, this.game.rangeY);
        this.game.coins.push(newCoin);
      } else {
        clearInterval(coinInterval);
      }
    };
    while (this.game.isStarted) {
      await sleep(1000);
    }
  }
}
