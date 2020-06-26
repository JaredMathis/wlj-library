const assert = require("./assert");
const args = require("./args");
const isBoolean = require("./isBoolean");
const throws = require("./throws");

module.exports = or;

function or(a, b) {
    args(arguments, isBoolean, isBoolean);
    return a || b;
}

assert(() => or(true, true) === true);
assert(() => or(true, false) === true);
assert(() => or(false, true) === true);
assert(() => or(false, false) === false);
// Requires 2 arguments
throws(() => or(true));
throws(() => or(true, true, true));