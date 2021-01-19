// Lesson 2: Arrays

// An array A consisting of N integers is given.
// Rotation of the array means that each element is shifted right by one index, 
// and the last element of the array is moved to the first place. 
// For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] 
// (elements are shifted right by one index and 6 is moved to the first place).

// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

// Write a function:
// that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

let testArray = [-3, 8, 9, 7, 6]
let rotate = 1

// Score: 100%
function cyclicRotation(A, K){
    K = K % A.length
    let sliceA = A.slice(A.length-K, A.length)
    let sliceB = A.slice(0, A.length-K)
    return sliceA.concat(sliceB)
}

cyclicRotation(testArray, rotate)