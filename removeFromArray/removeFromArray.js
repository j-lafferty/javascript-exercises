var removeFromArray = function() {
    var arg;
    var mainArr = [];
    var arguArr = [];
    var check;
    var remove;

    //check arguments for arrays
    for (var i = 0; i < arguments.length; i++) {
        arg = arguments[i];
        if (Array.isArray(arg)) {
            mainArr = arg.slice();
        } else {
            arguArr.push(arg);
        };
    };

    //check and remove mainArr values that match arguArr values
    for (var i = 0; i < arguArr.length; i++) {
        check = arguArr[i];
        if (mainArr.indexOf(check) >= 0) {
            remove = mainArr.indexOf(check);
            mainArr.splice(remove, 1);
        };
    };

    return mainArr;
};

module.exports = removeFromArray
