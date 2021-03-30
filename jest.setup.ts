import {toBeValidRegel} from "./tests/matchers/toBeValidRegel";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidRegel(location: string): CustomMatcherResult;
    }
  }
}

expect.extend({
  toBeValidRegel
});

