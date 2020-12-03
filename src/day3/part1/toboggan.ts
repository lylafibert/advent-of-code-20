const getTreesEncountered = (
  right: number,
  down: number,
  map: string[]
): number => {
  const mapWidth = map[0].length;
  const mapHeight = map.length;
  let xIndex = 0;
  let yIndex = 0;

  let treeCount = 0;

  while (yIndex < mapHeight) {
    if (xIndex >= mapWidth) xIndex -= mapWidth;
    if (map[yIndex].charAt(xIndex) === "#") treeCount++;
    xIndex += right;
    yIndex += down;
  }
  return treeCount;
};

export default getTreesEncountered;
