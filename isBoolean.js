const assert = require("./assert");

module.exports = isBoolean;

function isBoolean(b) {
    assert(() => arguments.length === 1);
    return b === true || b === false;
}

assert(() => isBoolean(true) === true);
assert(() => isBoolean(false) === true);
assert(() => isBoolean('false') === false);