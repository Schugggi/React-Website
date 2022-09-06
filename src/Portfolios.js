import React from 'react'

import placeholder from './img/placeholder-16-9.jpg'
import plattformer2 from './img/picture_unity_plattformer_2d.PNG'

export const Portfolios = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <a href="https://portfolio.bbbaden.ch/view/view.php?t=5wlsGRtmLdeyCKkFOEI7" target="_blank"><img src={plattformer2} alt={"Plattformer Teil 2"}></img></a>
            <div className="card-body">
              <p className="card-text">Das ist das Portfolio für den Teil 2 des Unity Plattformers</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow">
            <img src={placeholder} alt={"placeholder"}></img>
            <div className="card-body">
              <p className="card-text">Das ist ein Placeholder</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow">
            <img src={placeholder} alt={"placeholder"}></img>
            <div className="card-body">
              <p className="card-text">Das ist ein Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
