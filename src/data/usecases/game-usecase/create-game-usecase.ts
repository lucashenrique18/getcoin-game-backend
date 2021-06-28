import { GameModel } from "../../../domain/model/game-model";
import { CreateGame, CreateGameModel } from "../../../domain/usecases/game";

export class GameUseCase implements CreateGame {
  constructor(private readonly game: GameModel) {}
  async createGame(gameData: CreateGameModel): Promise<GameModel> {
    this.game.rangeX = gameData.rangeX;
    this.game.rangeY = gameData.rangeY;
    this.game.pointsTime = gameData.pointsTime;
    this.game.maxPlayers = gameData.maxPlayers;
    this.game.maxPoints = gameData.maxPoints;
    this.game.maxTime = gameData.maxTime;
    this.game.msCoin = 2000;
    return this.game;
  }
}
