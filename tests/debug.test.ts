import * as path from "path";
import {recursiveJSONSearch} from "./helpers/recursiveJSONSearch";

describe('polis', () => {
  const sourcePath = path.resolve('./src');
  let filesToCheck: string[] = recursiveJSONSearch(sourcePath);

  test.each(filesToCheck)('%s', (a) => {
    let obj = require(a);

    if (Object.prototype.toString.call(obj) === '[object Array]') {
      for (let j = 0; j < obj.length; j++) {
        expect(obj[j]).toBeValidRegel(a);
      }
    } else {
      fail('het hoofdobject in de json moet een array zijn, het is nu:' + Object.prototype.toString.call(obj));
    }
  });
});
