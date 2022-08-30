import React from 'react'

import placeholder from './img/placeholder.png'

export const Portfolios = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <img src={placeholder} alt={"placeholder"} ></img>
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src={placeholder} alt={"placeholder"} ></img>
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
    </div>
  )
}
