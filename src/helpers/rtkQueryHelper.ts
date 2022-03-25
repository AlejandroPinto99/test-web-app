import { CacheTagsEnum } from "../enums/cache-tags-enum";

type ExtractStringPropertyNames<T> = {
  [K in keyof T]: T[K] extends string | undefined ? K : never;
}[keyof T];

export function mapProvidedTag<T>(
  result: T[],
  tag: string,
  idProperty: ExtractStringPropertyNames<T>
) {
  return result
    ? [
        ...result.map((item) => {
          const propertyId = item[idProperty];

          return {
            type: tag,
            id: String(propertyId),
          };
        }),
        tag,
      ]
    : [tag];
}
