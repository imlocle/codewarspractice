let n = 32;

function binaryGap(num){
    let binary = parseInt(num).toString(2)
    console.log(binary)
    let removeLastZeros = binary.slice(0, binary.lastIndexOf('1')+1);
    let split1 = removeLastZeros.split('1').filter(i => i != "");
    if (split1.length == 0 && typeof(split1) !=='undefined') { return 0 }
    let zeroCount = split1.map(b => b.length);
    return Math.max.apply(null, zeroCount)
}

console.log(binaryGap(n))