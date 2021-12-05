const binarySearch = function(sortedArray, searchedNum) {
    let first = 0
    let last = sortedArray.length - 1
    while (first <= last) {
        let middle = Math.floor((first + last) / 2);
        if (sortedArray[middle] == searchedNum) {
            return middle
        } else {
            if (sortedArray[middle] < searchedNum) {
                first = middle + 1
            } else {
                last = middle - 1
            }
        }
    }
    return null
}


let arr1 = [1, 2, 3, 5, 10, 15]

console.log(binarySearch(arr1, 5));