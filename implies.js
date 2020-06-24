const assert = require('./assert');
const or = require('./or');
const not = require('./not');
const args = require('./args');
const isBoolean = require('./isBoolean');

module.exports = implies;

function implies(a, b) {
    args(arguments, isBoolean, isBoolean);
    return or(not(a), b);
}

assert(() => implies(true, true) === true);
assert(() => implies(true, false) === false);
assert(() => implies(false, true) === true);
assert(() => implies(false, false) === true);