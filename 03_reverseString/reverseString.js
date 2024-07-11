const reverseString = function(word) {
    const strArray = word.split('');
    const reversedArray = strArray.reverse();
    const reversedStr = reversedArray.join('');

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
