/**
 * 
 *  countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4 5
countZeroes([1,0,0,0,0,0,0]) // 4 5
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) / 
 */
function countZeroes(arr) {
  let rightIdx = arr.length - 1;
  if (arr[rightIdx] !== 0) return 0;
  let leftIdx = 0;
  if (arr[leftIdx] === 0) return arr.length;
  let count = 0;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal === 0) {
      count += rightIdx - middleIdx + 1;
      rightIdx = middleIdx - 1;
    } else if (middleVal !== 0) {
      leftIdx = middleIdx + 1;
    }
  }

  return count;
}

module.exports = countZeroes;
