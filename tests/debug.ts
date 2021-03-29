import {validateObjectStructure} from "../src/validateObjectStructure";

const json = require('./json/trivial.json');

for (let i = 0; i < json.length; i++) {
    validateObjectStructure(json[i]);
}
