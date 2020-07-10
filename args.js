const assert = require('./assert');
const isFunction = require('./isFunction');

module.exports = args;

function args() {
    let expectedCount = arguments.length - 1;
    let a = arguments[0];

    assert(() => a.length === expectedCount);
    for (let i = 0; i < a.length; i++) {
        let type = arguments[i + 1]
        assert(() => isFunction(type), {arguments});
        assert(() => type(a[i]), {
            i,
            'a[i]': a[i],
            type:type.toString()
        });
    }
}