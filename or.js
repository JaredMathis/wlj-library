const assert = require("./assert");
const args = require("./args");
const isBoolean = require("./isBoolean");

module.exports = or;

function or(a, b) {
    args(arguments, isBoolean, isBoolean);
    return a || b;
}

assert(() => or(true, true) === true);
assert(() => or(true, false) === true);
assert(() => or(false, true) === true);
assert(() => or(false, false) === false);