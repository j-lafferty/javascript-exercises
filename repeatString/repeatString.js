var repeatString = function(text, n) {
    var result = "";
    if (n >= 0) {
        for (i = 0; i < n; i++) {
            result += text;
        };
        return result;
    } else {
        return "ERROR"
    };
};

module.exports = repeatString
