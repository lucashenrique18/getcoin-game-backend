import { StartGameUseCase } from "../../data/usecases/game-usecase/start-game-usecase";
import { SupervisorUseCase } from "../../data/usecases/game-usecase/supervisor-usecase";
import { GameModel } from "../../domain/model/game-model";
import { StartGameController } from "../../presentation/controllers/end-game-controller";
import { Controller } from "../../presentation/protocols/controller";
import { createDummyGame } from "../../utils/dummy-game";

const game: GameModel = createDummyGame();

export const makeStartGameController = (): Controller => {
  const supervisor = new SupervisorUseCase(game);
  const startGame = new StartGameUseCase(game, supervisor);
  return new StartGameController(startGame);
};
