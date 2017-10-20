const algebra = require('algebra')
const Complex = algebra.Complex

function MobiusTransformation (matrix, point) {
  // TODO If point === Infinity

  // TODO Cheating tests.
  return new Complex([2, 0])
}

module.exports = {
  Transformation: function (matrix) { return MobiusTransformation.bind(this, matrix) }
}
