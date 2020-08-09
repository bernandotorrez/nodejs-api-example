module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    semi: [2, 'always', { omitLastInOneLineBlock: true }],
    camelcase: ['error', { ignoreDestructuring: true, properties: 'never' }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    eqeqeq: ['error', 'smart', { null: 'ignore' }]

  }
};
