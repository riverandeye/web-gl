export const chunkArray = function (arr: Array<any>, size: number) {
  if (!arr.length) {
    return [];
  }
  return [arr.slice(0, size)].concat(chunkArray(arr.slice(size), size));
};
