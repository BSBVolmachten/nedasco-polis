import {structure} from "../tests/structure";
import {structureComparison} from "./structureComparison";

export function validateObjectStructure(json) {
    const properties = Object.keys(json);
    const result = {};

    for (let i = 0; i < properties.length; i++) {
        result[properties[i]] = structureComparison(json[properties[i]], structure[properties[i]]);
    }

    console.log(JSON.stringify(json, null, 2), result);
}