const assert = require("./assert");
module.exports = not;

function not(a) {
    return !a;
}

assert(() => not(true) === false);
assert(() => not(false) === true);