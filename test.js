// // https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// let strng = 'foobar0099'
// //let strng = 'foobar000'
// let digits = []
// let word = []
// let leadZeros = []
// let lz = true

// strng.split('').forEach(x => {
//     if (/^[a-zA-Z]*$/.test(x)){
//         word.push(x)
//     }    
//     else {
//         digits.push(x)
//     }
// })

// if (digits < 1){
//     return word.join('') + '1'
// }

// // console.log(leadZeros)
// console.log(digits)
// console.log(word)

// let digit = parseInt(digits.join(''))

// console.log('digit: '+digit)

// digit = digit + 1
// console.log(digit)
// console.log('length: ' + digit.toString().length)

// if (digit.toString().length != digits.length && digit % 10 !=0 && digits.length - digit.toString().length == 1){
//     digit = digit / (10**digits.length)
// }
// digit = digit.toString().replace(/0\./,'')
// console.log(word.join('')+digit)
// return word.join('')+digit
// //console.log(word.join('')+e.join(''))
// //console.log(parseInt(digits.join('')+1)

// // if (digits.length < 1){
// //     console.log(word.join('')+leadZeros.join('')+1)
// // }
// // else{
// //     console.log(word.join('')+leadZeros.join('')+(parseInt(digits.join(''))+1))
// // }