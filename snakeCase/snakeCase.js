var snakeCase = function(str) {
    var strSnake = str.replace(/[ -\.]+/g, '_').replace(/[^a-zA-z\_]+/g, '').replace(/\.?([A-Z]+)/g, function (y){return "_" + y.toLowerCase()}).replace(/^_/, "").replace(/\_(?=_)+/g, '').replace(/\_$/, '').toLowerCase();


    return strSnake;
}

module.exports = snakeCase
