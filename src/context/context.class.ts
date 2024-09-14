import { IBotContext } from "./context.interface";

export class ContextClass {
  constructor() {}

  static async reply(
    ctx: IBotContext,
    ...args: Parameters<IBotContext["reply"]>
  ) {
    try {
      await ctx.reply(...args);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteMessage(ctx: IBotContext) {
    try {
      await ctx.deleteMessage();
    } catch (error) {
      console.log(error);
    }
  }
}
