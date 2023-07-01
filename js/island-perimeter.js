const islandPerimeter = function (grid) {
  const cols = grid[0].length;
  const rows = grid.length;

  let perimeter = 0;

  for (let n = 0; n < rows; n++) {
    for (let m = 0; m < cols; m++) {
      if (grid[n][m]) {
        perimeter += 4;

        if (n + 1 < rows && grid[n + 1][m]) {
          perimeter -= 1;
        }
        if (n - 1 >= 0 && grid[n - 1][m]) {
          perimeter -= 1;
        }
        if (m + 1 < cols && grid[n][m + 1]) {
          perimeter -= 1;
        }
        if (m - 1 >= 0 && grid[n][m - 1]) {
          perimeter -= 1;
        }
      }
    }
  }
  return perimeter;
};
