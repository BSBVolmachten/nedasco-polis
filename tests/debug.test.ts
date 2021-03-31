import * as fs from "fs";
import {promisify} from "util";
import * as path from "path";
import {recursiveJSONSearch} from "./helpers/recursiveJSONSearch";

describe('polis', () => {

  let filesToCheck: string[] = [];
  const readdirPromise = promisify(fs.readdir);
  const sourcePath = path.resolve('./src');

  beforeAll(() => {
    filesToCheck = recursiveJSONSearch(sourcePath);
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
