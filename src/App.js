import './App.css';
import './Header.css'
import './style.css'
import { Home } from './Home';
import { useState } from "react"
import { Portfolios } from "./Portfolios"

// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [site, setSite] = useState("Home")

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
  }
  return (


    <div className="App">
      <div className="">
        <header>
          {/* <ul className="nav">
            <li className="nav-item">fridge's Website</li>
            <li className="nav-item"><a onClick={() => handlePress("Home")} className={getClassName("Home")}>Home</a></li>
            <li className="nav-item"><a onClick={() => handlePress("Portfolios")} className={getClassName("Portfolios")}>Portfolios</a></li>
          </ul> */}

          <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
              <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
              <span className="font-semibold text-xl tracking-tight">fridge's Website</span>
            </div>
            <div className="block md:hidden">
              <button onClick={() => changeMenu()} className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              </button>
              <div id="menu" className="hidden w-44 rounded dark:bg-teal-500 items-right">
              <ul className="text-neutral-700 rounded dark:text-neutral-900">
                <li>
                  <a onClick={() => handlePress("Home")} className="block py-2 px-2 dark:hover:bg-neutral-700 rounded dark:hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={() => handlePress("Portfolios")} className="block py-2 px-2 dark:hover:bg-neutral-700 rounded dark:hover:text-white">
                    Portfolios
                  </a>
                </li>
              </ul>
            </div>
            </div>

            

            <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
              <div className="visibilty text-sm md:flex-grow">
                <a onClick={() => handlePress("Home")} className="block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white mr-4">
                  Home
                </a>
                <a onClick={() => handlePress("Portfolios")} className="block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white mr-4">
                  Portfolios
                </a>
              </div>
            </div>
          </nav>
        </header>

        <div id="menu" className="hidden w-44 rounded dark:bg-teal-500">
          <ul className="text-neutral-700 dark:text-neutral-900">
            <li><a onClick={() => handlePress("Home")} className="block py-2 px-4 dark:hover:bg-neutral-700 rounded dark:hover:text-white">
              Home
            </a>
            </li>
            <li><a onClick={() => handlePress("Portfolios")} className="block py-2 px-4 dark:hover:bg-neutral-700 neutral dark:hover:text-white">
              Portfolios
            </a>
            </li>
          </ul>
        </div>

        {site === "Home" ? <Home></Home> : null}
        {site === "Portfolios" ? <Portfolios></Portfolios> : null}

      </div>
      {/* <footer className="stickyfooter">
        <div className="container">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a className="nav-link px-2 text-muted" onClick={() => handlePress("Home")}>Home</a></li>
            <li className="nav-item"><a className="nav-link px-2 text-muted" onClick={() => handlePress("Portfolios")}>Portfolios</a></li>
          </ul>
          <p className="text-center text-muted">&copy; fridge 2022</p>
        </div>
      </footer> */}
      <footer class="hidden md:flex w-full h-16 bg-teal-500 border-t-2 border-white
            fixed left-0 bottom-0
            flex justify-center items-center
            text-white
            ">
        <div className="space-x-4">
          <button className="bg-transparent hover:bg-neutral-700 text-neutral-900 font-semibold hover:text-white py-2 px-4 border border-neutral-900 hover:border-transparent rounded"><a className="" onClick={() => handlePress("Home")}>Home</a></button>
          <button className="bg-transparent hover:bg-neutral-700 text-neutral-900 font-semibold hover:text-white py-2 px-4 border border-neutral-900 hover:border-transparent rounded"><a className="" onClick={() => handlePress("Portfolios")}>Portfolios</a></button>
        </div>
      </footer>
    </div>
  );
}



export default App;
