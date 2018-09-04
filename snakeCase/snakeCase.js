var snakeCase = function(str) {
    var strSnake = str.replace(/\W+/g, '_').replace(/A-Z(?=[a-zA-Z])+/g, function (y){return "_" + y.toLowerCase()}).replace(/[A-Z](?=[a-zA-Z])/, function (y){return "_" + y.toLowerCase()}).replace(/^_/, "").replace(/\_(?=_)+/g, '').replace(/\_$/, '').toLowerCase();


    return strSnake;
}

module.exports = snakeCase

/* 
Explanation of REGEX code:

First,
.replace(/\W+/g, '_') ----> replaces any non-word character with '_'.

Next,
.replace(/A-Z(?=[a-zA-Z])+/g, function (y){return "_" + y.toLowerCase()}) ----> replaces any A-Z character, only if followed by a-z or A-Z, with '_' and the matching a-z character.

This converted WTF case.

Next,
.replace(/[A-Z](?=[a-zA-Z])/, function (y){return "_" + y.toLowerCase()}) ----> replaces a A-Z character, only if followed by a-z or A-Z, with '_' and the matching a-z character.

This converted camelCase.

Next, 
.replace(/^_/, "") ----> removes any '_' at the start of the sentence/phrase.

Next,
.replace(/\_(?=_)+/g, '') ----> removes any '_', only if followed by '_'.

Next,
.replace(/\_$/, '') ---- > removes any '_' at the end of the sentence/phrase.

Lastly,
.toLowerCase() ----> snake_case does not contain any A-Z characters.
 */