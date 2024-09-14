export interface IConfigService {
  get(): IConfig;
}

export interface IConfig {
  token: string;
}
