// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
// 7 kyu
// In a factory a printer prints labels for boxes.
// For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. 
// For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.
// You have to write a function printer_error which given a string will output the error rate of the printer as a string
// representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from a to z.
function printerError(string){
    var countError = 0;
    // checking length and characters
    if (string.length < 1 || string.match(/[\d+\W+]/i)){
        return "Invalid";
    }

    else {
        for (var i = 0; i < string.length; i++){
            if (string[i].match(/[n-z]/i)){
                countError++;
            }
        }
    }
    return countError + "/" + string.length;
}

printerError("aabbbeeee");
printerError("aaklcklmnmiozzww");

// https://www.codewars.com/kata/529eef7a9194e0cbc1000255
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
var isAnagram = function(test, original) {
    function createKeyValue(word){
      let dict = {}
      word.split('').forEach(x => {
        dict[x] ? dict[x] += 1 : dict[x] = 1
      })
      return dict
    }
    
    function compareObjects(object1, object2) {
      const keys1 = Object.keys(object1);
      const keys2 = Object.keys(object2);
    
      if (keys1.length !== keys2.length) {
          return false
      }
    
      for (let key of keys1) {
        if (object1[key] !== object2[key]) {
          return false
        }
      }
      return true
    }
    let dict1 = createKeyValue(test.toLowerCase())
    let dict2 = createKeyValue(original.toLowerCase())
    return compareObjects(dict1, dict2)
  };