const assert = require("./assert");

module.exports = or;

function or(a, b) {
    return a || b;
}

assert(() => or(true, true) === true);
assert(() => or(true, false) === true);
assert(() => or(false, true) === true);
assert(() => or(false, false) === false);