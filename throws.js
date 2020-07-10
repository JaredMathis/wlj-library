const args = require("./args");
const isFunction = require("./isFunction");
const assert = require("./assert");
const isBoolean = require("./isBoolean");

module.exports = throws;

let log = false;

function throws(lambda) {
    if (log) console.log(throws.name + ' entered ' + lambda);
    args(arguments, isFunction);

    let success;
    try {
        lambda();
        success = false;
    } catch (e) {
        success = true;
    }

    if (log) console.log({success});
    if (!success) {
        console.log(throws.name + ' error');
        console.log(lambda.toString());
        throw new Error('Expecting exception');
    }
}

throws(() => {
    throw new Error('error');
});

let consoleLog = console.log;
let success;
try {
    console.log = () => {};
    throws(() => {
        return null;
    });
    success = false;
} catch (e) {
    success = true;
} finally {
    console.log = consoleLog;
}
assert(() => success);

args([]);
// Too many args
throws(() => args([1]));
args([true], isBoolean);
// Too many args
throws(() => args([true, true], isBoolean));
// Too few args
throws(() => args([true, true], isBoolean, isBoolean, isBoolean));