const u = require('wlj-utilities');
const executeCommand = u.executeCommand;

// Run tests before bumping.
require('./index');

let bumped = u.bumpPackageVersion(__dirname);

executeCommand('npm publish');

console.log('published ' + bumped);