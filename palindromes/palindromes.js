var palindromes = function(str) {
    var str = str.toLowerCase().replace(/[^A-Za-z]+/g, '');
    var strReverse = str.split('').reverse().join('');

    /* for (i = word.length; i > 0; i--) {
        reverse += word.charAt(i - 1);
    }; */
    if (str === strReverse) {
        return true;
    } else {
        return false;
    };
};

module.exports = palindromes
