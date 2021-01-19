// Lesson 2: Arrays

// A non-empty array A consisting of N integers is given. 
// The array contains an odd number of elements, 
// and each element of the array can be paired with another element that has the same value, 
// except for one element that is left unpaired

// Write a function:
// that, given an array A consisting of N integers fulfilling the above conditions, 
// returns the value of the unpaired element.

// Score: 100%
function solution(A){
    let mySet = new Set();
    for (let i = 0; i<A.length;i++){
        if (mySet.has(A[i])){
            mySet.delete(A[i])
        }
        else {
            mySet.add(A[i])
        }
    }
    return parseInt(mySet.values().next().value)
}

