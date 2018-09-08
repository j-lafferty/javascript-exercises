var caesar = function(str, shift) {

    //wrap shift if negative
    if (shift < 0) {
        return caesar (str, shift + 26);
    };

    //encoded output
    var encodeStr = "";

    /* 
    use ASCII to reference upper/lower letters.
    upper A thru Z = 65 thru 90.
    lower a thru z = 97 thru 122.
    */

    for (var i = 0; i < str.length; i++) {
        var strChar = str.charCodeAt(i);
        var sum = strChar + shift;

        if (strChar >= 65 && strChar <= 90) {           //check for upper A thru Z.
            encodeStr += String.fromCharCode((sum - 65) % 26 + 65);
        } else if (strChar >= 97 && strChar <= 122) {   //check for lower a thru z.
            encodeStr += String.fromCharCode((sum - 97) % 26 + 97);
        } else {
            encodeStr += String.fromCharCode(strChar);  //keep punctuation.
        };
    };
    return encodeStr;
};

module.exports = caesar
