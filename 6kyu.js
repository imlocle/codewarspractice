// https://www.codewars.com/kata/speech-to-text-string-manipulation/train/javascript
// 6 kyu
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