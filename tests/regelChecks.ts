import DoneCallback = jest.DoneCallback;

export function regelChecks(regelObject: any, done: DoneCallback) {

    if (Object.prototype.toString.call(regelObject) !== '[object Object]') {
        fail(`het regel object is geen object ${Object.prototype.toString.call(regelObject)}`);
    }


    done();

}
