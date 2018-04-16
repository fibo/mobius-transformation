const algebra = require('algebra')

const Complex = algebra.Complex
const C2x2 = algebra.C2x2

function MobiusTransformation ([a, b, c, d], point) {
  const m = new C2x2([a, b, c, d])

  if (m.det.eq(Complex.zero)) {
    throw new Error('determinant cannot be zero')
  }

  if (point === Infinity) {
    return Complex.zero.min(d).div(c)
  } else {
    const denominator = point.mul(c).add(d)

    if (denominator.eq(Complex.zero)) {
      return Infinity
    } else {
      return point.mul(a).add(b).div(denominator)
    }
  }
}

function Transformation (matrix) {
  return MobiusTransformation.bind(this, matrix)
}

module.exports = exports.default = { Transformation }
