#!/usr/bin/env babel-node

import React from 'react'
import reactDom from 'react-dom/server'
import svgx from 'svgx'

const render = svgx(reactDom.renderToStaticMarkup)

const jsx = (
  <svg width={600} height={200} viewBox='-100 -100 200 200'>
    <circle cx={0} cy={0} r={100} />
  </svg>
)

const svgOutput = render(jsx)

console.log(svgOutput)
