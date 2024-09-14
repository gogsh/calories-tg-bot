import { Scenes, Telegraf } from "telegraf";
import { IConfigService } from "./config/config.interface";
import { ConfigService } from "./config/config.service";
import { IBotContext } from "./context/context.interface";
import LocalSession from "telegraf-session-local";
import { PATH_TO_DB } from "./constants";
import TelegrafLogger from "telegraf-logger";

export class Bot {
  bot: Telegraf<IBotContext>;

  constructor(private readonly configService: IConfigService) {
    this.bot = new Telegraf<IBotContext>(this.configService.get().token);
    this.bot.use(new LocalSession({ database: PATH_TO_DB }).middleware());
    this.bot.use(new TelegrafLogger().middleware());

    this.bot.use(
      new Scenes.Stage<any>([
        // new StartScene(this.configService).scene,
      ]).middleware()
    );
  }

  init() {
    try {
      this.bot.launch();
    } catch (error) {
      console.error(error);
    }
  }
}

const bot = new Bot(new ConfigService());

bot.init();
