import fs from "fs";

export class Fs {
  constructor() {}

  static readFileSync(path: string) {
    try {
      return JSON.parse(fs.readFileSync(path, "utf8"));
    } catch (error) {
      throw new Error(`Ошибка при чтении файла: ${error}`);
    }
  }

  static rewriteFileData(path: string, newData: unknown) {
    fs.writeFile(path, JSON.stringify(newData, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }
}
