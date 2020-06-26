const assert = require("./assert");
const args = require("./args");
const isBoolean = require("./isBoolean");
const throws = require("./throws");
module.exports = not;

function not(a) {
    args(arguments, isBoolean);
    return !a;
}

assert(() => not(true) === false);
assert(() => not(false) === true);
throws(() => not(1));
throws(() => not());