module.exports = assert;

function assert(lambda) {
    let result = lambda();
    if (!result) {
        throw new Error('Assert failed: ' + lambda);
    }
}

