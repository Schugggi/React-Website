import React from 'react'

import placeholder from './img/placeholder-16-9.jpg'
import plattformer2 from './img/picture_unity_plattformer_2d.PNG'
import plattformer1 from './img/picture_unity_plattformer_2d_teil1.PNG'
import dungeonstormer1 from './img/picture_unity_dungeon_stormer_code.png'
import dungeonstormer2 from './img/picture_unity_dungeon_stormer.PNG'
import todoit from './img/todoit.png'

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
          <a className="" href="https://portfolio.bbbaden.ch/view/view.php?t=5wlsGRtmLdeyCKkFOEI7" target="_blank"><img src={plattformer2} alt={"Plattformer Teil 2"}></img></a>
          <div className="">
            <p className="">Das ist das Portfolio für den Teil 2 des Unity Plattformers</p>
          </div>
        </div>
      </div>
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <a className="" href="https://portfolio.bbbaden.ch/view/view.php?t=bWhY5eudETLmHRqMwrFU" target="_blank"><img src={dungeonstormer1} alt={"Dungeon Stormer part 1 code"}></img></a>
          <div className="">
            <p className="">Das ist das Portfolio für den Teil 1 des Unity Dungeon Stormer</p>
          </div>
        </div>
      </div>
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <a className="" href="https://portfolio.bbbaden.ch/view/view.php?t=fSnWV6umBtwLH2kdyh0P" target="_blank"><img src={dungeonstormer2} alt={"Dungeon Stormer part 2"}></img></a>
          <div className="">
            <p className="">Das ist das Portfolio für den Teil 2 des Unity Dungeon Stormer</p>
          </div>
        </div>
      </div>
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <a className="" href="https://portfolio.bbbaden.ch/view/view.php?t=8s0ZXjCkSIwc4RKP5Q69" target="_blank"><img src={todoit} alt={"Bild für ToDoIt"}></img></a>
          <div className="">
            <p className="">Das ist das Portfolio für die ToDoIt App in JavaFx</p>
          </div>
        </div>
      </div>
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <a className="" href="" target="_blank"><img src={placeholder} alt={""}></img></a>
          <div className="">
            <p className="">Placeholder</p>
          </div>
        </div>
      </div>
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <a className="" href="" target="_blank"><img src={placeholder} alt={""}></img></a>
          <div className="">
            <p className="">Placeholder</p>
          </div>
        </div>
      </div>
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <a className="" href="" target="_blank"><img src={placeholder} alt={""}></img></a>
          <div className="">
            <p className="">Placeholder</p>
          </div>
        </div>
      </div>
      <div className="shadow-md shadow-gray-400 rounded">
        <div className="">
          <a className="" href="" target="_blank"><img src={placeholder} alt={""}></img></a>
          <div className="">
            <p className="">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  )
}
