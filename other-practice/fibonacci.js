// https://www.fibonicci.com/fibonacci/the-sequence/

let f = 0

const fibonacci = (n) => {
    if (n < 2){
        f += n
        return n;
    }
    else {
        return (fibonacci(n - 1) + fibonacci(n - 2))
    }
}

fibonacci(20);
console.log(f);