// https://www.codewars.com/kata/duplicate-encoder/train/javascript
// 6 kyu
// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string,
// or ')' if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples:
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

// Notes:
// There is a flaw in the JS version, that may occur in the random tests. Do not hesitate to do several attempts before modifying your code if you fail there. 
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).

function duplicateEncode(word){
    var encodedString = "";
    word = word.toLowerCase();
    var dict = [];
    for (var i = 0; i < word.length; i++){
        dict.push({key:word[i], value:0});
        for (var j = 0; j < word.length; j++){
            if (word[i] == word[j]){
                dict[i].value++;
            }
                     
        }
    }
    for (var k = 0; k < dict.length; k++){
       if (dict[k].value > 1){
           encodedString += ")";
       }
       else {
           encodedString += "(";
       }
    }
    return encodedString;
}

duplicateEncode("(( @")


// https://www.codewars.com/kata/speech-to-text-string-manipulation/train/javascript
// 6 kyu
// Siri needs you to code some new features: addition, subtraction and a weather checker. There's no need to implement the speech recognition, that's taken care of...
// Examples: "Add 7 to 15." -> 22 "Subtract 7 from 15." -> 8 "What is the weather at 5:30pm?" -> "sunny"
// According to the weather API, it is "sunny" from (including) 6am to 6pm (including), and "raining" the rest of the day.
// // Disclaimer: Yes, those features may already exist in Siri.
function message(msg){
    if (msg.match(/Add/)){
        var rx1 = /Add\s*(\w+)\s*to\s*(\w+)/g;
        var digit = rx1.exec(msg);
        return parseInt(digit[1]) + parseInt(digit[2]);
    }

    if (msg.match(/Subtract/)){
        var rx1 = /Subtract\s*(\w+)\s*from\s*(\w+)/g;
        var digit = rx1.exec(msg);
        return Math.abs(parseInt(digit[1]) - parseInt(digit[2]));
    }

    if (msg.match(/.+?weather.+?/)){
        var date = new Date();
        var rxTime = /.+?weather\s*at\s*(\w+):(\w+)(AM|PM|am|pm)\?/;
        var hour = msg.match(rxTime)[1];
        var sunnyStart = new Date(date.getFullYear(), date.getMonth(), date.getDay(), 6, 0);
        var sunnyEnd = new Date(date.getFullYear(), date.getMonth(), date.getDay(), 18, 0);
        if (msg.match(rxTime)[3] == "PM" || msg.match(rxTime)[3] == "pm"  && parseInt(hour) != 12){
            hour = parseInt(hour) + 12;            
        }
        var timeReq = new Date(date.getFullYear(), date.getMonth(), date.getDay(), hour, msg.match(rxTime)[2]);
        if (timeReq >= sunnyStart && timeReq <= sunnyEnd){
            return "sunny"
        }
        else {
            return "raining"
        }
    }
}
message("Add 5 to 20");    
message("Subtract 13 from 439");
message("What is the weather at 6:00pm?");