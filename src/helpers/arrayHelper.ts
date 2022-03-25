import { nanoid } from "nanoid";

const ArrayHelper = {
  /**
   * Group an array of items by property
   * @param {[]} data Array of objects to group
   * @param {(item) => string} f Grouping Function based on object property in data param
   * @returns {object} Object containing keys as the group and value as the grouped values
   * **/
  groupBy: <T, K extends string>(data: T[], f: (item: T) => K) =>
    data.reduce<Partial<Record<K, T[]>>>((a, b) => {
      var _f: K;

      return (a[(_f = f(b))] || (a[_f] = []))?.push(b), a;
    }, {}),

  generateKeyID: () => {
    return nanoid(10);
  },
};

export { ArrayHelper };
