import './App.css'
import './Header.css'
import './style.css'
import { Home } from './Home'
import { useState } from "react"
import { Portfolios } from "./Portfolios"
import githublogo from './img/github_emblem.png'
import linkedinlogo from './img/linkedin_logo.png'
import logo from './img/placeholder_logo.png'
import mail from './img/mail_logo.png'


function App() {

  const [site, setSite] = useState("Home")
  var menuOpened = false
  function handlePress(site) {
    setSite(site)
  }

  function changeMenu() {
    console.log("Button gets klicked")
    var menu = document.getElementById("menu")
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
    menu = !menu
  }
  return (


    <div className="App">
      <div className="">
        <header>
          <nav className="flex items-center justify-between flex-wrap bg-teal-600 p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
              <img className="h-8 w-8 mr-2" width="54" height="54" src={logo} alt={"Platzhalter Logo"}></img>
              <span className="text-2xl tracking-tight">fridge's Website</span>
            </div>
            <div className="block md:hidden">
              <button onClick={() => changeMenu()} className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              </button>
              <div id="menu" className="hidden w-44 rounded dark:bg-teal-500 items-right">
              <ul className="text-neutral-700 rounded dark:text-neutral-900">
                <li>
                  <a onClick={() => handlePress("Home")} className="block text-md dark:hover:bg-neutral-700 rounded dark:hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={() => handlePress("Portfolios")} className="block text-md dark:hover:bg-neutral-700 rounded dark:hover:text-white">
                    Portfolios
                  </a>
                </li>
              </ul>
            </div>
            </div>

            <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
              <div className="visibilty md:flex-grow">
                <a onClick={() => handlePress("Home")} className="block text-base mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white mr-4">
                  Home
                </a>
                <a onClick={() => handlePress("Portfolios")} className="block text-base mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white mr-4">
                  Portfolios
                </a>
              </div>
            </div>
          </nav>
        </header>

        {site === "Home" ? <Home></Home> : null}
        {site === "Portfolios" ? <Portfolios></Portfolios> : null}

      </div>
      <footer className="hidden md:flex w-full h-16 bg-teal-600 border-t-2 border-white
            fixed left-0 bottom-0
            flex justify-center items-center
            text-white
            ">
        <div className="space-x-6">
          {/* <h1 className="justify-center">Kontakt</h1> */}
          <a href="https://github.com/Schugggi" target="_blank" className=""><img src={githublogo} alt={"Github"} className="inline object-contain h-12 w-24"></img></a>
          <a href="https://www.linkedin.com/in/joel-fritschi-9a7a26238/" target="_blank" className=""><img src={linkedinlogo} alt={"Linkedin"} className="inline object-contain h-12 w-24"></img></a>
          <a href="mailto:Jfritschi@gmx.ch?subject= &body= " target="_blank" className=""><img src={mail} alt={"Linkedin"} className="inline object-contain h-12 w-24"></img></a>
        </div>
      </footer>
    </div>
  )
}



export default App;
