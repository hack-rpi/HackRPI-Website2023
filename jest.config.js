module.exports = {
    testEnvironment: 'node', // or 'jsdom' for browser-like environment
    roots: ['<rootDir>/src'], // specify the root directory of your source files
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'], // specify the test file patterns
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy', // handle CSS imports
    },
    // ... other Jest configuration options
  };
  