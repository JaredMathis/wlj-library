const args = require("./args");
const isFunction = require("./isFunction");
const assert = require("./assert");

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

let success;
try {
    throws(() => {
        return null;
    });
    success = false;
} catch (e) {
    success = true;
}
assert(() => success);