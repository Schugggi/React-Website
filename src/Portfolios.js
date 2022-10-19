import React from 'react'

import placeholder from './img/placeholder-16-9.jpg'
import plattformer2 from './img/picture_unity_plattformer_2d.PNG'
import plattformer1 from './img/picture_unity_plattformer_2d_teil1.PNG'

export const Portfolios = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-4 ">
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <a className="" href="https://portfolio.bbbaden.ch/view/view.php?t=w9HjVEn0Lkoq7dFMSv4s" target="_blank"><img src={plattformer1} alt={"Plattformer Teil 1"}></img></a>
          <div className="">
            <p className="">Das ist das Portfolio für den Teil 1 des Unity Plattformers</p>
          </div>
        </div>
      </div>
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <a className="object-scale-down" href="https://portfolio.bbbaden.ch/view/view.php?t=5wlsGRtmLdeyCKkFOEI7" target="_blank"><img src={plattformer2} alt={"Plattformer Teil 2"}></img></a>
          <div className="">
            <p className="">Das ist das Portfolio für den Teil 2 des Unity Plattformers</p>
          </div>
        </div>
      </div>
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <img src={placeholder} alt={"placeholder"}></img>
          <div className="">
            <p className="">Das ist ein Placeholder</p>
          </div>
        </div>
      </div>
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <img src={placeholder} alt={"placeholder"}></img>
          <div className="">
            <p className="">Das ist ein Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  )
}
