import './App.css';
import './Header.css'
import { Home } from './Home';
import { useState } from "react"
import { Portfolios } from "./Portfolios"

// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [site, setSite] = useState("Home")

  function handlePress(site) {
    setSite(site)
  }

  function getClassName(register) {
    console.log(site === register)
    if (site === register) { return "nav-link active" }
    return "nav-link"
  }

  return (


    <div className="App">
      <div className="container">
        <header>
          <ul className="nav">
            <li className="nav-item">fridge's Website</li>
            <li className="nav-item"><a onClick={() => handlePress("Home")} className={getClassName("Home")}>Home</a></li>
            <li className="nav-item"><a onClick={() => handlePress("Portfolios")} className={getClassName("Portfolios")}>Portfolios</a></li>
          </ul>
        </header>

        {site === "Home" ? <Home></Home> : null}
        {site === "Portfolios" ? <Portfolios></Portfolios> : null}

      </div>
      <footer className="stickyfooter">
        <div className="container">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a className="nav-link px-2 text-muted" onClick={() => handlePress("Home")}>Home</a></li>
            <li className="nav-item"><a className="nav-link px-2 text-muted" onClick={() => handlePress("Portfolios")}>Portfolios</a></li>
          </ul>
          <p class="text-center text-muted">&copy; fridge 2022</p>
        </div>
      </footer>
    </div>
  );
}



export default App;
