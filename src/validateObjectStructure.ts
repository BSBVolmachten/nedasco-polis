import {structure} from "../tests/structure";
import {structureComparison} from "./structureComparison";

export function validateObjectStructure(json) {
    const properties = Object.keys(json);
    const result: boolean[] = [];

    for (let i = 0; i < properties.length; i++) {
        let comparisonResult = structureComparison(json[properties[i]], structure[properties[i]]);

        result.push(comparisonResult);
    }

    console.log(json, result);
}