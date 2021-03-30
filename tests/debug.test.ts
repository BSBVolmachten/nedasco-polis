import {checkRegel} from "./checkRegel";
import DoneCallback = jest.DoneCallback;

describe('single polis', () => {

  test('debug', (done: DoneCallback) => {
    const obj: any = require('./json/foute_maatschappijen.json');

    if (Object.prototype.toString.call(obj) === '[object Array]') {
      for (let i = 0; i < obj.length; i++) {
        checkRegel(obj[i], done);
      }
    } else {
      fail('het hoofdobject in de json moet een array zijn, het is nu:' + Object.prototype.toString.call(obj));
    }

  })

});
