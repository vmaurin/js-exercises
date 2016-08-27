var bubbleSort = function(arr, comparator) {
    for (var size = arr.length - 1; size > 0; --size) {
        for (var i = 0; i < size; ++i) {
            if (comparator(arr[i], arr[i + 1]) > 0) {
                var tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }
};


var testArr = [6, 5, 3, 1, 8, 9, 7, 2, 4];
bubbleSort(testArr, function(a, b) {
    return a - b;
});
console.log(testArr);

bubbleSort(testArr, function(a, b) {
    return b - a;
});
console.log(testArr);
