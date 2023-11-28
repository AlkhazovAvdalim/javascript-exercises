const repeatString = function(string,num) {
    let total = ""
    for (let i=1; i<num+1; i++){
        total += string
    }
    console.log(total)
    return total
};

// Do not edit below this line
module.exports = repeatString;

repeatString("hey",4)