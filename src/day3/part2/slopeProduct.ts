import getTreesEncountered from "../part1/toboggan";

type route = {
  right: number;
  down: number;
};
const getSlopeProduct = (routes: route[], map: string[]): number => {
  let slopeProduct = 1;
  routes.forEach(({ right, down }) => {
    const treesEncountered = getTreesEncountered(right, down, map);
    slopeProduct *= treesEncountered;
  });
  return slopeProduct;
};

export default getSlopeProduct;
