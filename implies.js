const assert = require('./assert');
const or = require('./or');
const not = require('./not');

module.exports = implies;

function implies(a, b) {
    return or(not(a), b);
}

assert(() => implies(true, true) === true);
assert(() => implies(true, false) === false);
assert(() => implies(false, true) === true);
assert(() => implies(false, false) === true);