/* eslint-disable indent */

const algebra = require('algebra')
const test = require('tape')
const mobius = require('mobius-transformation')

const Complex = algebra.Complex

test('example', (t) => {
  t.plan(1)

  const zero = new Complex([0, 0])
  const one = new Complex([1, 0])
  const half = new Complex([0.5, 0])

  const inversion = new mobius.Transformation([zero, one,
                                               one, zero])

  const two = inversion(half)

  t.deepEqual(two.data, [2, 0], '1/2 -> 2')
})
