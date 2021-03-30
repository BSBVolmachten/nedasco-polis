import DoneCallback = jest.DoneCallback;

export function checkRegel(regelObject: any, done: DoneCallback) {

  if (Object.prototype.toString.call(regelObject) !== '[object Object]') {
    fail(`het regel object is geen object ${Object.prototype.toString.call(regelObject)}`);
    done()
    return;
  }

  if (regelObject.hasOwnProperty('omschrijving')) {
    expect(typeof regelObject.omschrijving).toBe('string');
  }

  if (regelObject.hasOwnProperty('inhoud')) {
    expect(typeof regelObject.inhoud).toBe('string');
  }

  if (regelObject.hasOwnProperty('extraOmschrijving')) {
    expect(typeof regelObject.extraOmschrijving).toBe('string');
  }

  if (regelObject.hasOwnProperty('type')) {
    expect(typeof regelObject.type).toBe('string');
  }

  if (regelObject.hasOwnProperty('maatschappijen')) {

    if (Object.prototype.toString.call(regelObject.maatschappijen) !== '[object Array]') {
      fail('de maatschappijen zijn niet opgegeven als lijst, maar als:' + typeof regelObject.maatschappijen);
      done();
      return;
    }

    for (let i = 0; i < regelObject.maatschappijen.length; i++) {
      if (typeof regelObject.maatschappijen[i] !== 'string') {
        fail('een maatschappij moet opgegeven worden als string, het is nu: ' + typeof regelObject.maatschappijen[i]);
      }
    }
  }

  if (regelObject.hasOwnProperty('vereiste_labels')) {

    if (Object.prototype.toString.call(regelObject.vereiste_labels) !== '[object Array]') {
      fail('de vereiste_labels zijn niet opgegeven als lijst, maar als: ' + typeof regelObject.vereiste_labels);
      done();
      return;
    }

    for (let i = 0; i < regelObject.vereiste_labels.length; i++) {
      if (typeof regelObject.vereiste_labels[i] !== 'string') {
        fail('een vereist label moet opgegeven worden als string, het is nu: ' + typeof regelObject.vereiste_labels[i]);
      }
    }

  }

  done();

}
