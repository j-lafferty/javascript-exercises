var caesar = function(str, shift) {
    var encodeStr = "";

    /* 
    use ASCII to reference upper/lower letters.
    upper A thru Z = 65 thru 90.
    lower a thru z = 97 thru 122.
    */
    for (var i = 0; i < str.length; i++) {
        var strChar = str.charCodeAt(i);
        if (strChar >= 65 && strChar <= 90) {
            encodeStr += String.fromCharCode((strChar - 65 + shift) % 26 + 65);
        } else if (strChar >= 97 && strChar <= 122) {
            encodeStr += String.fromCharCode((strChar - 97 + shift) % 26 + 97);
        } else {
            encodeStr += String.fromCharCode(strChar);
        };
    };
    return encodeStr;
};

module.exports = caesar
