function getRandomArray(size, maxNumber) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.round(Math.random()*maxNumber))
    }
    return array;
}

function divideArrayInTwo(array) {
    const pivot = array.length % 2 == 0 ? (array.length / 2) : (array.length / 2) + 1
    return [
        array.slice(0, pivot),
        array.slice(pivot)
    ]
}

function sortArray(array) {
    if (array.length == 1) return array;
    return array[0] > array[1] ? array.reverse() : array
}

function mergeArrays(array_1, array_2) {    
    let mergeArray = [];
    let number; 
    while (array_1.length > 0 || array_2.length > 0) {
        if(array_1.length == 0) {
            number = array_2.shift() 
        } else if(array_2.length == 0) {
            number = array_1.shift()
        } else {
            number = array_1[0] < array_2[0] ? array_1.shift() : array_2.shift()
        }
        mergeArray.push(number)
    }
    return mergeArray
}

function mergeSort(array) {
    let left = []
    let right = [] 

    if (array.length > 1) {
        [left, right] = divideArrayInTwo(array)
        left = mergeSort(left)
        right = mergeSort(right)

        if (left.length <= 2 || right.length <= 2) 
        return mergeArrays(sortArray(left), sortArray(right))  
    }
    return array.length > 1 ? mergeArrays(left, right) : array
}

const randomArray = getRandomArray(100, 1000) 
//console.log(randomArray);
let result = mergeSort(randomArray);
console.log(result);
console.log('end')