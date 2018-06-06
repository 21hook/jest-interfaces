/* jest config file */
const path = require('path');

// opt/property interfaces
module.exports = {
    rootDir: path.resolve(__dirname), // root dir of the module
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest', // transform all .js files
    }
};
