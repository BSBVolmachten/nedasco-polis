import CustomMatcherResult = jest.CustomMatcherResult;

export function toBeValidRegel(received: any, location: string): CustomMatcherResult {
  return {
    pass: true,
    message: () => {
      return 'Het object ' + JSON.stringify(received) + ' op de locatie ' + location + ' zou geen valid regel moeten zijn ';
    }
  }
}
