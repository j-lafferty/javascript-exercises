var snakeCase = function(str) {
    var strSnake = str.replace(/[ -]+/g, '_').replace(/[^a-zA-z\_]+/g, '').toLowerCase();

    return strSnake;
}

module.exports = snakeCase
