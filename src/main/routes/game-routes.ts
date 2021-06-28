import { Router } from "express";
import { adaptPostRoute } from "../adapters/express-route-adapter";
import { makeCreateGameController } from "../factories/create-game-factory";

export default (router: Router): void => {
  router.post("/create-game", adaptPostRoute(makeCreateGameController()));
  // router.get("/start-game", adaptPostRoute(makeStartGameController()));
  // router.get("/end-game", adaptPostRoute(makeEndGameController()));
};
