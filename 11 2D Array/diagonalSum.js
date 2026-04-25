function diagonalSum(mat) {
  let sum = 0;
  let a = 0;
  let b = mat.length - 1;
  for (let i = 0; i < mat.length; i++) {
    if (a != b) {
      sum += mat[i][a] + mat[i][b];
    } else {
      sum += mat[i][a];
    }
    a++;
    b--;
  }
  return sum;
}
