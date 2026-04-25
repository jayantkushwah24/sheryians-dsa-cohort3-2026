function rotateImage(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let arr = new Array(row);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(col);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      arr[j][row - i - 1] = matrix[i][j];
    }
  }
  return arr;
}
const matrix = [
  [5, 2, 13, 15],
  [1, 4, 3, 14],
  [9, 8, 6, 12],
  [11, 10, 7, 16],
];
// console.log(rotateImage(matrix));

function rotateImageInPlace(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let a = 0;
    let b = matrix[i].length - 1;
    while (a < b) {
      let temp = matrix[i][a];
      matrix[i][a] = matrix[i][b];
      matrix[i][b] = temp;
      a++;
      b--;
    }
  }
  return matrix;
}
console.log(rotateImageInPlace(matrix));
