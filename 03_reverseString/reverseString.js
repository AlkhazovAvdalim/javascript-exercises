const reverseString = function(string) {
    console.log(string)
    string = string.split('')
    console.log(string)
    string = string.reverse()
    console.log(string)
    string = string.join('')
    console.log(string)
    return(string)
};

// Do not edit below this line
module.exports = reverseString;
