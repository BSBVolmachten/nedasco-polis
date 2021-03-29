import {validateObjectStructure} from "../src/validateObjectStructure";

const json = require('./json/condities.json');

for (let i = 0; i < json.length; i++) {
    validateObjectStructure(json[i]);
}
