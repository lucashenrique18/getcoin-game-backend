import { AddPlayer } from "../../domain/usecases/game";
import { MissingParamError } from "../errors";
import { badRequest, serverError, ok } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class AddPlayerController implements Controller {
  constructor(private readonly game: AddPlayer) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ["id", "name", "image"];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }
      const { id, name, image } = httpRequest.body;
      const player = await this.game.addPlayer({
        id,
        name,
        image,
      });
      return ok(player);
    } catch (err) {
      console.log(err);
      return serverError(err);
    }
  }
}
