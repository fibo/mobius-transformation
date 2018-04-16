#!/usr/bin/env babel-node

import React from 'react'
import reactDom from 'react-dom/server'
import svgx from 'svgx'

const render = svgx(reactDom.renderToStaticMarkup)

const jsx = (
  <svg width={600} height={200} viewBox='-100 -100 200 200'>
    <circle
      className='locus'
      cx={0}
      cy={0}
      r={100}
    />
    <circle
      className='point'
      cx={50}
      cy={0}
      r={5}
    />
    <circle
      className='point'
      cx={200}
      cy={0}
      r={5}
    />
  </svg>
)

const svgOutput = render(jsx, {
  style: `.locus { fill: white; stroke: gold; stroke-width: 2 }
.point { fill: red; }`
})

console.log(svgOutput)
