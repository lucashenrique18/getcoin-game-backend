import { Express } from "express";
import { Socket } from "socket.io";
import { readdirSync } from "fs";

export const wsEvents = (app: Express, ws: Socket): void => {
  readdirSync(`${__dirname}/../ws-events/`).map(async (file) => {
    if (!file.includes(".test.")) {
      (await import(`../ws-events/${file}`)).default(ws);
    }
  });
};
