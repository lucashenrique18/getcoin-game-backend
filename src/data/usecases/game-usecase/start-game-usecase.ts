import { GameModel } from "../../../domain/model/game-model";
import { StartGame } from "../../../domain/usecases/game";
import { Supervisor } from "../../../domain/usecases/supervisor";

export class StartGameUseCase implements StartGame {
  constructor(
    private readonly game: GameModel,
    private readonly supervisor: Supervisor
  ) {}
  startGame(): void {
    this.game.isStarted = true;
    this.supervisor.supervise(this.game);
  }
}
