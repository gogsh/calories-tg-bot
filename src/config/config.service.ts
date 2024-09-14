import { IConfig, IConfigService } from "./config.interface";
import { Fs } from "../fs/fs.service";
import { PATH_TO_CONFIG } from "../constants";

export class ConfigService implements IConfigService {
  private config: IConfig;

  constructor() {
    try {
      const parsed = Fs.readFileSync(PATH_TO_CONFIG) as IConfig;

      if (!parsed) {
        throw new Error("Пустой конфиг");
      }

      this.config = parsed;
    } catch (error) {
      throw new Error(`Ошибка в конфигурации: ${error}`);
    }
  }
  get() {
    return this.config;
  }
}
