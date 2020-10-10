function findFloor(arr, target) {
  let leftIdx = 0
  let rightIdx = arr.length - 1
  let tempFloor = -1;

  while(leftIdx <= rightIdx){
      let middleIdx = Math.floor((leftIdx + rightIdx)/2);
      let middleVal = arr[middleIdx]

      if(middleVal > target){
          rightIdx = middleIdx - 1;
      } else if (middleVal < target){
          leftIdx = middleIdx + 1;
          tempFloor = Math.max(arr[middleIdx], tempFloor)
      } else {
          return tempFloor = arr[middleIdx]
      }
  }
  return tempFloor
}

module.exports = findFloor