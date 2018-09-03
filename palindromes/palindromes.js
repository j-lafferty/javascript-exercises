var palindromes = function(word) {
    var word = word;
    var reverse = '';

    for (i = word.length; i > 0; i--) {
        reverse += word.charAt(i - 1);
    };
    if (word === reverse) {
        return true;
    };
};

module.exports = palindromes
