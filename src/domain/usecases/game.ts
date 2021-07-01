import { GameModel } from "../model/game-model";
import { PlayerModel } from "../model/player-model";

export interface CreateGameModel {
  pointsTime: number;
  maxPlayers: number;
  maxPoints: number;
  maxTime: number;
  rangeX: number;
  rangeY: number;
  msCoin: number;
}

export interface AddPlayerModel {
  id: string;
  name: string;
  image: string;
}

export interface CreateGame {
  createGame(gameData: CreateGameModel): Promise<GameModel>;
}

export interface StartGame {
  startGame(): void;
}

export interface EndGame {
  endGame(): void;
}

export interface AddPlayer {
  addPlayer(playerDate: AddPlayerModel): Promise<PlayerModel>;
}
