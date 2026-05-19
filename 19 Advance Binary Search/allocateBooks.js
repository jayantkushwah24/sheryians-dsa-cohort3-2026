/**
 * @param {number[]} pages - Array of book pages
 * @param {number} students - Number of students
 * @return {number} - Minimum number of maximum pages assigned to a student
 */
function allocateBooks(pages, students) {
  if (k > pages.length) return -1;
  let start = 0,
    end = 0;
  let ans = -1;
  for (let i = 0; i < pages.length; i++) {
    if (pages[i] > start) {
      start = pages[i];
    }
    end += pages[i];
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = students;
    let currSum = 0;
    let maxPage = 0;
  }
}
