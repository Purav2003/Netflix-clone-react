import { useState } from "react";
import netflix from "./images/netflix-avatar.png"
import logo from "./images/netflix-logo.png"
import * as icons from 'react-icons/fi';


const Navbar = () => {
  const [text, setText] = useState()
  const firstnav = () => {
    const a = window.location.href
    return a.includes("home") ? "okk" :"nookk"
  }
  const secondnav = () => {
    const a2 = window.location.href
    return a2.includes("tv") ? "okk" : a2.includes("Tv") ? "okk": "nookk" 

  }
  const thirdnav = () => {
    const a = window.location.href
    return a.includes("Movies") ? "okk" : "nookk"
  }
  const fournav = () => {
    const a2 = window.location.href
    return a2.includes("Recently-Added") ? "okk" : "nookk"

  }
  const fivenav = () => {
    const a2 = window.location.href
    return a2.includes("my-list") ? "okk" : "nookk"
  }
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text){
      localStorage.setItem('search', JSON.stringify(text))
      window.location.replace('/Search')

    }
}

  return <section >
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="/">
            <img
              src={logo}
              height="55"
              width="95"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/home" className={`nav-link ${firstnav()}`}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${secondnav()}`} href="/Tv">Tv Shows</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${thirdnav()}`} href="/Movies">Movieeees</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${fournav()}`} href="/Recently-Added">Recently Added</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${fivenav()}`} href="/my-list">My List</a>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
        <form onSubmit={handleSubmit}>
          <input type='text' value={text} onChange={handleChange} className="search-input" placeholder="Search Movie/Tv"></input>
            <button type="submit" className="button-search">          <a className="text-white me-3" href="Search">
<icons.FiSearch className="icons-search"/>  </a> </button>  
            </form>
          <a className="text-white me-3 nav-right" href="#">
            KIDS
          </a>
          <a className="text-white me-3 nav-right" href="#">
            DVD
          </a>
          <div className="dropdown">
            <a
              className="text-white me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">Some news</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Another news</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={netflix}
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </section>
}
export default Navbar
