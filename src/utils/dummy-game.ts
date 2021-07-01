import { GameModel } from "../domain/model/game-model";
import { v4 as uuidv4 } from "uuid";
const dummyGame: GameModel = {
  id: uuidv4(),
  rangeX: 10,
  rangeY: 10,
  maxPlayers: 10,
  maxPoints: 10,
  maxTime: 60000,
  coins: [],
  players: [],
  isStarted: false,
  msCoin: 3000,
};

const createDummyGame = (): GameModel => dummyGame;

export { createDummyGame };
