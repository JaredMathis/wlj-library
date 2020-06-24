const isFunction = require("./isFunction");

module.exports = assert;

function assert(lambda, context) {
    if (!isFunction(lambda)){
        throw new Error('Expecting function: ' + lambda);
    }
    let result = lambda();
    if (!result) {
        throw new Error('Assert failed: ' + lambda + '; context: ' + JSON.stringify(context, null, 1));
    }
}

