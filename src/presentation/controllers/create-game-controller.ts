import { CreateGame } from "../../domain/usecases/game";
import { MissingParamError } from "../errors";
import { badRequest, serverError, ok } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class CreateGameController implements Controller {
  constructor(private readonly game: CreateGame) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = [
        "pointsTime",
        "maxPlayers",
        "maxPoints",
        "maxTime",
        "rangeX",
        "rangeY",
        "msCoin",
      ];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }
      const {
        pointsTime,
        maxPlayers,
        maxPoints,
        maxTime,
        rangeX,
        rangeY,
        msCoin,
      } = httpRequest.body;
      const game = await this.game.createGame({
        pointsTime,
        maxPlayers,
        maxPoints,
        maxTime,
        rangeX,
        rangeY,
        msCoin,
      });
      return ok(game);
    } catch (err) {
      console.log(err);
      return serverError(err);
    }
  }
}
