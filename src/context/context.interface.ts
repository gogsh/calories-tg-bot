import { Context } from "telegraf";

export interface SessionData {
  [key: string]: any;
}

export interface IBotContext extends Context {
  session: SessionData;
}
