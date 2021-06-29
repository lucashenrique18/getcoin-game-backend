import { CoinModel } from "../domain/model/coin-model";
import { v4 as uuidv4 } from "uuid";

const crateDummyCoin = (
  maxPositionX: number,
  maxPositionY: number
): CoinModel => {
  return {
    id: uuidv4(),
    points: 1,
    type: "normal",
    positionX: Math.floor(Math.random() * (maxPositionX - 0 + 1)) + 0,
    positionY: Math.floor(Math.random() * (maxPositionY - 0 + 1)) + 0,
  };
};

export { crateDummyCoin };
