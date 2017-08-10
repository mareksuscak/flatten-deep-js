# flatten-deep [![Build Status](https://travis-ci.org/mareksuscak/flatten-deep-js.svg?branch=master)](https://travis-ci.org/mareksuscak/flatten-deep-js)

ƛ Flattens arbitrarily nested arrays.

## Installation

```sh
# NPM
npm install github:mareksuscak/flatten-deep-js

# Yarn
yarn add https://github.com/mareksuscak/flatten-deep-js
```

## How To Use

```js
import flattenDeep from 'flattenDeep'
// or
// var flattenDeep = require('flatten-deep')

flattenDeep([1, [2, [3]], 4]) // -> [1, 2, 3, 4]
```

## Running Tests

Interactive mode

```js
// NPM
npm test -- --watch

// Yarn
yarn test -- --watch
```

Single run mode:

```js
// NPM
npm test

// Yarn
yarn test
```

## Known Issues

- No browser environment tests (e.g. [karma](https://karma-runner.github.io/))
- No code coverage monitoring (Jest [supports --coverage flag](http://facebook.github.io/jest/docs/cli.html#coverage) + 
  [junit reporter](jasmine-reporters) necessary)
- Missing benchmarks ([benchmark.js](https://benchmarkjs.com/))
- Not using [flow](https://flow.org/) for static type checks

## Contributing

See our [Contribution Guidelines](CONTRIBUTING.md).

## License

See the [License](LICENSE.md).
