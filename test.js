var test = require('tape')
var mobius = require('./index')

test('it', function (t) {
  t.plan(1)

  mobius()([1, 0,
           [0, 1], 1])

  t.skip()
})
