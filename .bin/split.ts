import yargs = require("yargs");
import * as path from "path";
import * as fs from "fs";

const argv = yargs(process.argv.slice(2)).options({
  f: {
    type: 'string',
    demandOption: true,
    description: 'path to json file'
  },
  d: {
    type: 'string',
    demandOption: true,
    description: 'path to directory to put the split files in'
  }
}).argv;

const jsonBestand = require(path.resolve(argv.f));
const destination = path.resolve(argv.d);

for (let i = 0; i < jsonBestand.length; i++) {
  let regelObject = jsonBestand[i];

  if (!regelObject.maatschappijen) {
    continue;
  }

  let maatschappijen = [...regelObject.maatschappijen];

  delete regelObject.maatschappijen;

  for (let j = 0; j < maatschappijen.length; j++) {

    let maatschappij = maatschappijen[j];
    let filePath = path.resolve(path.join(destination, maatschappij + '.json'));

    let stats;

    try {
      stats = fs.statSync(filePath);
    } catch (e) {
    }

    if (!stats) {
      let newRegels = [regelObject];
      fs.writeFileSync(filePath, JSON.stringify(newRegels, null, 2));
    } else {
      let regels = require(filePath);
      regels.push(regelObject);
      fs.writeFileSync(filePath, JSON.stringify(regels, null, 2));
    }

  }
}
