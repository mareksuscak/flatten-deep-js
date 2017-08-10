# flatten-deep [![Build Status](https://travis-ci.org/mareksuscak/flatten-deep-js.svg?branch=master)](https://travis-ci.org/mareksuscak/flatten-deep-js)

ƛ Flattens an arbitrarily nested arrays.

## Installation

```sh
# NPM
npm install @mareksuscak/flatten-deep

# Yarn
yarn install @mareksuscak/flatten-deep
```

## How To Use

```js
import flattenDeep from '@mareksuscak/flattenDeep'
// or
// var flattenDeep = require('@mareksuscak/flatten-deep')

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

- Not being tested on any browser environment
- Code coverage is not being monitored

## Contributing

See our [Contribution Guidelines](CONTRIBUTING.md).

## License

See the [License](LICENSE.md).
