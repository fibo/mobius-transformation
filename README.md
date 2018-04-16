# möbius-transformation

> implements beautiful geometric transformations that preserve angles and generalized circles

> Möbius transformations are named in honor of August Ferdinand Möbius; they are also variously named *homographies*, *homographic transformations*, *linear fractional transformations*, *bilinear transformations*, or *fractional linear transformations*.

See [Möbius transformation on wikipedia][mobius_wiki].

[Installation](#installation) |
[API](#api) |
[Example](#examples) |
[License](#license)

[![NPM version](https://badge.fury.io/js/mobius-transformation.svg)](http://badge.fury.io/js/mobius-transformation)
[![Build Status](https://travis-ci.org/fibo/mobius-transformation.svg?branch=master)](https://travis-ci.org/fibo/mobius-transformation?branch=master)
[![Dependency Status](https://gemnasium.com/fibo/mobius-transformation.svg)](https://gemnasium.com/fibo/mobius-transformation)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

With [npm](https://npmjs.org/) do

```bash
npm install mobius-transformation
```

## API

### `new mobius.Transformation([a, b, c, d])`

## Examples

Unit circle inversion.

[!Inversion](http://g14n.info/mobius-transformation/unit-circle-inversion.svg)

```javascript
const algebra = require('algebra')
const mobius = require('mobius-transformation')

const Complex = algebra.Complex

const zero = new Complex([0, 0])
const one = new Complex([1, 0])
const half = new Complex([0.5, 0])

const inversion = new mobius.Transformation([zero, one,
                                             one,  zero])

const two = inversion(half)

console.log(two) // Complex { data: [2, 0] }
```

## License

[MIT](http://g14n.info/mit-license/)

[mobius_wiki]: https://en.wikipedia.org/wiki/M%C3%B6bius_transformation
