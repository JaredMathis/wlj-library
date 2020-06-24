const assert = require("./assert");
const args = require("./args");
const isBoolean = require("./isBoolean");
module.exports = not;

function not(a) {
    args(arguments, isBoolean);
    return !a;
}

assert(() => not(true) === false);
assert(() => not(false) === true);