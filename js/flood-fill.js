const floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) {
    return image;
  }
  const height = image.length;
  const weight = image[0].length;

  const queue = [];
  const used = new Set();
  const startedColor = image[sr][sc];
  queue.push([sr, sc]);

  while (queue.length) {
    const [i, j] = queue.shift();
    used.add([i, j]);
    image[i][j] = color;

    if (
      i + 1 < height &&
      !used.has([i + 1, j]) &&
      image[i + 1][j] === startedColor
    ) {
      queue.push([i + 1, j]);
    }
    if (
      i - 1 >= 0 &&
      !used.has([i - 1, j]) &&
      image[i - 1][j] === startedColor
    ) {
      queue.push([i - 1, j]);
    }
    if (
      j + 1 < weight &&
      !used.has([i, j + 1]) &&
      image[i][j + 1] === startedColor
    ) {
      queue.push([i, j + 1]);
    }
    if (
      j - 1 >= 0 &&
      !used.has([i, j - 1]) &&
      image[i][j - 1] === startedColor
    ) {
      queue.push([i, j - 1]);
    }
  }

  return image;
};

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);
