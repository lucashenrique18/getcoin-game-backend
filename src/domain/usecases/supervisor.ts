import { GameModel } from "../model/game-model";

export interface Supervisor {
  supervise(game: GameModel): void;
}
