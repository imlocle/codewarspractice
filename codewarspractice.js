// In a factory a printer prints labels for boxes.
// For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. 
// For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.
// You have to write a function printer_error which given a string will output the error rate of the printer as a string
// representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from a to z.
// 7KYU
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

printerError("aabbbeeee")


// Siri needs you to code some new features: addition, subtraction and a weather checker. There's no need to implement the speech recognition, that's taken care of...

// Examples: "Add 7 to 15." -> 22 "Subtract 7 from 15." -> 8 "What is the weather at 5:30pm?" -> "sunny"

// According to the weather API, it is "sunny" from (including) 6am to 6pm (including), and "raining" the rest of the day.

// // Disclaimer: Yes, those features may already exist in Siri.

function message(msg){
    if (msg.match(/Add/)){
        var rx1 = /Add\s*(\w+)\s*to\s*(\w+)/g;
        var rx2 = /Add\s*\w+\s*to\s*(\w+)/g;
        var digit = rx1.exec(msg);
        return parseInt(digit[1]) + parseInt(digit[2]);
    }

    if (msg.match(/Subtract/)){
        var rx1 = /Subtract\s*(\w+)\s*from\s*(\w+)/g;
        var rx2 = /Subtract\s*\w+\s*from\s*(\w+)/g;
        var digit = rx1.exec(msg);
        return parseInt(digit[1]) - parseInt(digit[2]);
    }
    
}

message("Subtract 155 from 20")