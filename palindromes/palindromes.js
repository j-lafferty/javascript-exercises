var palindromes = function(word) {
    var word = word.toLowerCase().replace(/[^A-Za-z]+/g, '');
    var reverse = word.split('').reverse().join('');

    /* for (i = word.length; i > 0; i--) {
        reverse += word.charAt(i - 1);
    }; */
    if (word === reverse) {
        return true;
    };
};

module.exports = palindromes
