/**
 * 
 * find the amount of times a sorted array has been rotated
 * notes:
 *  what ever the smallest number index is at in the sorted array is the amount of times its been rotated
 * so find the smallest number in a rotated index
 * split the array
 * check if the middle is greater than the right side
 * if it is the array is still rotated
 * if it is not the array is not rotated and middle would be the smallest number
 * ex [6,7,8,1,2,4]
 *     [8,1,2,4]
 *      [1,2,4]
 *      
 *  
 */
function findRotationCount(arr) {
let leftIdx = 0;
let rightIdx = arr.length - 1;

//if the left is greater than the right the array is rotated
while (arr[leftIdx] > arr[rightIdx]){
    let midIdx = Math.floor((leftIdx+rightIdx)/2);
    let midVal = arr[midIdx]

    //if the middle is greater than the right the it is still rotated
    if(midVal > arr[rightIdx]){
        //move left to the mid
        leftIdx = midIdx + 1;
    } else {
        //if the mid is less than or equal to the right than I know the mid is the smallest value 
        //return its index to get the amount of times the array has been rotated.
        rightIdx = midIdx;
    }
}

return leftIdx;
}

module.exports = findRotationCount