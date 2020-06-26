const args = require("./args");
const isFunction = require("./isFunction");

module.exports = throws;

function throws(lambda) {
    args(arguments, isFunction);

    try {
        lambda();
        throw new Error('Expecting exception');
    } catch (e) {

    }
}

try {
    throws(() => {
        throw new Error('error');
    });
    throw new Error('should not be here')
} catch (e) {

}

try {
    throws(() => {
        return null;
    });
} catch (e) {
    throw new Error('should not be here')
}