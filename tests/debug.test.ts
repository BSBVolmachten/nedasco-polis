import * as fs from "fs";
import {promisify} from "util";
import * as path from "path";

describe('polis', () => {

  const filesToCheck: string[] = [];
  const readdirPromise = promisify(fs.readdir);
  const sourcePath = path.resolve('./src');

  beforeAll(() => {

    return readdirPromise(sourcePath).then((directories: string[]) => {
      return Promise.all(directories.map((directory: string) => {

        if (path.extname(directory) === '.json') {
          filesToCheck.push(path.resolve(path.join(sourcePath, directory)));
          return null;
        }

        let stats;

        try {
          stats = fs.statSync(path.join(sourcePath, directory));
        } catch (e) {
          console.error(e);
          return null;
        }

        if (stats.isDirectory()) {
          return readdirPromise(path.resolve(path.join(sourcePath, directory))).then((files: string[]) => {
            return files.map((file: string) => {
              return path.resolve(path.join(sourcePath, directory, file));
            });
          });
        }

        return null;
      }));
    }).then((filesList: (string[] | null)[]) => {
      for (let i = 0; i < filesList.length; i++) {

        if (filesList[i] === null) continue;
        if (!(filesList[i] instanceof Array)) continue;

        for (let j = 0; j < (<string[]>filesList[i]).length; j++) {
          filesToCheck.push((<string[]>filesList[i])[j]);
        }
      }
    });

  });

  test('alle json bestanden', () => {
    console.log(filesToCheck);

    for (let i = 0; i < filesToCheck.length; i++) {
      const obj: any = require(filesToCheck[i]);

      if (Object.prototype.toString.call(obj) === '[object Array]') {
        for (let j = 0; j < obj.length; j++) {
          expect(obj[j]).toBeValidRegel(filesToCheck[i]);
        }
      } else {
        fail('het hoofdobject in de json moet een array zijn, het is nu:' + Object.prototype.toString.call(obj));
      }
    }
  });

});
