var fibonacci = function(num) {
//Improved solution

    var fibArr = [];

    fibArr[0] = 0;
    fibArr[1] = 1;

    if (num < 0) {
        return "OOPS";
    };

    for (var i = 2; i <= num; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    };

    return fibArr[num]; 
};

module.exports = fibonacci

/* 
Original solution

var fibArr = [1, 1];

    if (num < 0) {
        return "OOPS";
    } else if (num == 1) {
        return fibArr[0];
    } else if (num == 2) {
        return fibArr[1];  
    } else {
        for (var i = 2; i < num; i++) {
            fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
        };
    };
    return fibArr[fibArr.length - 1];    
*/