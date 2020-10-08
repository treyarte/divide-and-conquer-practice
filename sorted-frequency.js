/**
 * 
 * sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1
 */

function sortedFrequency(arr, target) {
  let firstOccur = binarySearchFindFirst(arr, target);

  if (firstOccur === -1) return -1;

  let lastOccur = binarySearchFindLast(arr, target);

  return lastOccur - firstOccur + 1;
}

function binarySearchFindFirst(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < target) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > target) {
      rightIdx = middleIdx - 1;
    } else if (leftIdx !== middleIdx) {
      rightIdx = middleIdx;
    } else {
      return middleIdx;
    }
  }
  return -1;
}

function binarySearchFindLast(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let results = -1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal === target) {
      results = middleIdx;
      leftIdx = middleIdx + 1;
    } else if (middleVal < target) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > target) {
      rightIdx = middleIdx - 1;
    }
  }
  return results;
}

module.exports = sortedFrequency;
