var reverseString = function(text) {
    var reverseStr = "";

    for (i = 0; i <= text.length; i++) {
        reverseStr += text.charAt(text.length - i);
    };
    return reverseStr;
};

module.exports = reverseString