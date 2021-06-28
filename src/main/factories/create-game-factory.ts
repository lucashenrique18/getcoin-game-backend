import { GameUseCase } from "../../data/usecases/game-usecase/create-game-usecase";
import { GameModel } from "../../domain/model/game-model";
import { CreateGameController } from "../../presentation/controllers/create-game-controller";
import { Controller } from "../../presentation/protocols/controller";
import { createDummyGame } from "../../utils/dummy-game";

const game: GameModel = createDummyGame();

export const makeCreateGameController = (): Controller => {
  const createGame = new GameUseCase(game);
  return new CreateGameController(createGame);
};
