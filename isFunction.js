module.exports = isFunction;

function isFunction(f) {
    if (arguments.length !== 1) {
        throw new Error('Expecting single argument');
    }
    return f && {}.toString.call(f) === '[object Function]';
}