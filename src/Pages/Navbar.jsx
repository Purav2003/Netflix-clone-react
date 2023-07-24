import { useState } from "react";
import netflix from "./images/netflix-avatar.png"
import logo from "./images/netflix-logo.png"
import * as icons from 'react-icons/fi';
import * as icon from 'react-icons/rx';
import * as home from 'react-icons/hi';
import * as movie from 'react-icons/tb';
import * as fav from 'react-icons/bs';

const Navbar = () => {
  const [text, setText] = useState()
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

const highlight = (e) =>{
    localStorage.setItem('highlights', JSON.stringify(e))
}

  let hey = (localStorage.getItem('highlights'))
  hey = JSON.parse(localStorage.getItem('highlights'))

const data = () => {
  var x = document.getElementById("data");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
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
          onClick={data}
        >
          <icon.RxHamburgerMenu />
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
            <li className="nav-item" onClick={() => highlight("Home")}>
              <a href="/home" className={`nav-link ${hey === "Home"?"clicked":"not-clicked"}`}>Home</a>
            </li>
            <li className="nav-item" onClick={() => highlight("Tv Shows")}>
              <a href="/Tv" className={`nav-link ${hey === "Tv Shows"?"clicked":"not-clicked"}`} >Tv Shows</a>
            </li>
            <li className="nav-item" onClick={() => highlight("Movies")}>
              <a className={`nav-link ${hey === "Movies"?"clicked":"not-clicked"}`} href="/Movies">Movies</a>
            </li>
            <li className="nav-item" onClick={() => highlight("Recently Added")}>
              <a className={`nav-link ${hey === "Recently Added"?"clicked":"not-clicked"}`} href="/Recently-Added">Recently Added</a>
            </li>
            <li className="nav-item" onClick={() => highlight("My List")}>
              <a className={`nav-link ${hey === "My List"?"clicked":"not-clicked"}`} href="/my-list">My List</a>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center second-nav">
        <form onSubmit={handleSubmit} className="form-search fixed" id="data">
          <input type='text' value={text} onChange={handleChange} className="search-input" placeholder="Search Movie/Tv"></input>
            <button type="submit" className="button-search">          <a className="text-white me-3" href="Search">
<icons.FiSearch className="icons-search"/>  </a> </button>  
            </form>
          <a className="text-white me-3 nav-right side-links" href="#">
            KIDS
          </a>
          <a className="text-white me-3 nav-right side-links" href="#">
            DVD
          </a>
         
          <div className="dropdown side-links">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow side-links"
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
                className="side-links"
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


    <div className="fixed-bottom">
    <nav class="navbar">
    <div class="container-fluid">
      <ul class="nav justify-content-around bottom-nav">
        <li class="nav-item" onClick={() => highlight("Home")}>
          <a class="nav-link" href="#">
          <home.HiOutlineHome/>
          </a>
        </li>
        <li class="nav-item" onClick={() => highlight("Tv Shows")}>
          <a class="nav-link" href="#">
          <movie.TbMovie /> 
          </a>
        </li>
        <li class="nav-item" onClick={() => highlight("Movies")}>
          <a class="nav-link" href="#">
          <movie.TbMovie />          </a>
        </li>
        <li class="nav-item" onClick={() => highlight("Recently Added")}>
          <a class="nav-link" href="#">
          <movie.TbClock />         </a>
        </li>
        <li class="nav-item" onClick={() => highlight("My List")}>
          <a class="nav-link" href="#">
          <fav.BsBookmark />         </a>
        </li>
      </ul>
    </div>
  </nav>
    </div>

  </section>

}
export default Navbar
