var sumAll = function(a, b) {
    var sum = 0;
    if ((a >= 0 && b >= 0 && typeof a === "number" && typeof b === "number")) {
        if (a < b) {
            for (i = a; i <= b; i++) {
                sum += i;
            };
            return sum;
        } else {
            for (i = a; i >= b; i--) {
                sum += i;
            };
            return sum;
        };
    } else {
        return 'ERROR';
    };
    
};

module.exports = sumAll
