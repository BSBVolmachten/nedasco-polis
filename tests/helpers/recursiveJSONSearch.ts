import {readdirSync, Stats, statSync} from "fs";
import path from "path";

export function recursiveJSONSearch(sourcePath: string): string[] {
  let filePaths: string[] = [];

  const directoriesOrFiles: string[] = readdirSync(sourcePath);

  for (let i = 0; i < directoriesOrFiles.length; i++) {

    let stats: Stats | undefined;

    try {
      stats = statSync(path.resolve(path.join(sourcePath, directoriesOrFiles[i])));
    } catch (e) {
      console.error(e);
    } finally {
      if (stats?.isDirectory()) {
        let subFilePaths: string[] = recursiveJSONSearch(path.resolve(path.join(sourcePath, directoriesOrFiles[i])));
        filePaths = [...filePaths, ...subFilePaths]
      } else if (stats?.isFile()) {
        if (path.extname(directoriesOrFiles[i]) === '.json') {
          filePaths.push(path.resolve(path.join(sourcePath, directoriesOrFiles[i])));
        }
      }
    }

  }

  return filePaths;
}