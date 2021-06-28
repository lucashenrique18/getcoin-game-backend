import { GameModel } from "../domain/model/game-model";
import { v4 as uuidv4 } from "uuid";

const createDummyGame = (): GameModel => {
  return {
    id: uuidv4(),
    rangeX: 10,
    rangeY: 10,
    pointsTime: 500,
    maxPlayers: 10,
    maxPoints: 10,
    maxTime: 60,
    coins: [],
    players: [],
    isStarted: false,
  };
};

export { createDummyGame };
