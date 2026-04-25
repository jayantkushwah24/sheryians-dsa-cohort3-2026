function transposeMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let flag = false;
    for (let j = 0; j < matrix[i].length; j++) {
      if (i == j) {
        flag = true;
        continue;
      }
      if (flag) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }
  return matrix;
}
let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log(transposeMatrix(matrix));
