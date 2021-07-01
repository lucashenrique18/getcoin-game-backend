import { StartGame } from "../../domain/usecases/game";
import { serverError, ok } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class StartGameController implements Controller {
  constructor(private readonly startGame: StartGame) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const startGame = this.startGame.startGame();
      return ok("ok");
    } catch (err) {
      console.log(err);
      return serverError(err);
    }
  }
}
