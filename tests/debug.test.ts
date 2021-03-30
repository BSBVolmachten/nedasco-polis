import {regelChecks} from "./regelChecks";
import DoneCallback = jest.DoneCallback;

describe('single polis', () => {

    test('debug', (done: DoneCallback) => {
        const obj: any = require('./json/trivial.json');

        if (Object.prototype.toString.call(obj) === '[object Array]') {
            for (let i = 0; i < obj.length; i++) {
                regelChecks(obj[i], done);
            }
        } else {
            fail('het hoofdobject in de json moet een array zijn, het is nu:' + Object.prototype.toString.call(obj));
        }

    })

});
