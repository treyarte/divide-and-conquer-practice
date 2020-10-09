/*find the index of a rotated arr
//findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 10, 11, 12 1, 2, 3, 4], 4) // -1
[7,8,1,2], 2
*/
function findRotatedIndex(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if(arr[leftIdx] > arr[rightIdx]){
        middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let found =  findRotatedIndex(arr.slice(leftIdx, middleIdx + 1), target);
        
        if(found === -1){
            found = findRotatedIndex(arr.slice(middleIdx + 1, rightIdx + 1), target)
            if (found === -1) return found
            else {

                return found + arr.slice(leftIdx, middleIdx + 1).length
            }
        } 
            return found
        
    }

   
   
    return binarySearch(arr, target)

    //divide the array once into an upper and lower bound
   
    //search through the upper index bound using binary search
    //return the index if found else return -1
    // if found end the code else continue
    //search the lower index bound and repeat repeat steps above
    //end code

}

function binarySearch(arr,target){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)
        let middleVal = arr[middleIdx]

        if(middleVal < target){
            leftIdx = middleIdx + 1;
        } else if (middleVal > target){
            rightIdx = middleIdx - 1;
        } else {
            return middleIdx
        }
    }
    return -1;
}

module.exports = findRotatedIndex