import { PlayerModel as Player } from "./player-model";
import { CoinModel as Coin } from "./coin-model";

export interface GameModel {
  id: string;
  players: Array<Player>;
  pointsTime: number;
  maxPlayers: number;
  maxPoints: number;
  maxTime: number;
  coins: Array<Coin>;
  isStarted: boolean;
  rangeX: number;
  rangeY: number;
  msCoin: number;
}
