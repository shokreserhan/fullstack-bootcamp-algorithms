const mergeSort = function(arr, first, last) {
    if (first >= last) {
        return;
    }
    let middle = first + parseInt((last - first) / 2);
    mergeSort(arr, first, middle);
    mergeSort(arr, middle + 1, last);
    merge(arr, first, last, middle);
}

const merge = function(arr, first, last, middle) {
    let firstArray = []
    let secondArray = []
    for (let i = 0; i < middle - first + 1; i++) {
        firstArray[i] = arr[i + first]
    }
    for (let i = middle; i < last - middle; i++) {
        secondArray[i] = arr[i + middle + 1]
    }

    let indexFirstArray = 0
    let indexSecondArray = 0
    let indexArr = first

    while (indexFirstArray < firstArray.length && indexSecondArray < secondArray.length) {
        if (firstArray[indexFirstArray] > secondArray[indexSecondArray]) {
            arr[indexArr++] = secondArray[indexSecondArray++]
        } else {
            arr[indexArr++] = firstArray[indexFirstArray++]
        }
    }

    while (indexFirstArray < firstArray.length) {
        arr[indexArr++] = firstArray[indexFirstArray++]
    }

    while (indexSecondArray < secondArray.length) {
        arr[indexArr++] = secondArray[indexSecondArray++]
    }

}

let checkArr = [12, 11, 13, 5, 6, 7]

mergeSort(checkArr, 0, checkArr.length - 1)

console.log(checkArr);