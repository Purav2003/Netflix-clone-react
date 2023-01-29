import Carousel from 'better-react-carousel'
import React, { useState, useEffect } from "react";
import * as icons from 'react-icons/ai'
import '../index.css'

const getFavoritesFromLocalStorage = () => {
  let favoritesmovie = localStorage.getItem('favoritesMovie');
  if (favoritesmovie) {
    favoritesmovie = JSON.parse(localStorage.getItem('favoritesMovie'))
  }
  else {
    favoritesmovie = []
  }

  return favoritesmovie
}

const Search = () => {

  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  let search = (localStorage.getItem('search'))

  const [selectedMovie, setSelectedMovie] = useState(null)
  const [favoritesmovie, setFavoritesmovie] = useState(getFavoritesFromLocalStorage())
  if (search) {
    search = JSON.parse(localStorage.getItem('search'))
  }
  var newStr = search.split("");
  for (var i = 0; i < newStr.length; ++i) {
    // Changing the ith character
    // to '-' if it's a space.
    if (newStr[i] === " ") {
      newStr[i] = "-";
    }
  }
  const data = newStr.join("")
  const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=62ebf6fda469c1af3fe79388b1ce3912&query=' + data
  console.log(API_URL)
  const IMG = 'https://image.tmdb.org/t/p/w500/'
  const API_URL1 = 'https://api.themoviedb.org/3/search/tv?api_key=62ebf6fda469c1af3fe79388b1ce3912&query=' + data

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        if(movies.length<11){
        setMovies(data.results)
      }
      })
  }, [])
  useEffect(() => {
    fetch(API_URL1)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setTv(data.results)
      })
  }, [])
  const selectMovie = (id) => {
    let meal;
    meal = movies.find((meal) => meal.id === id)
    setSelectedMovie(meal)
    console.log(selectedMovie)
    const { title: Title, poster_path: data, overview: over, release_date: rel, vote_average: voteavg } = selectedMovie
    if (Title) {
      document.getElementById("demo").innerHTML = (`<br /><br /><br /><br />
        <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-3">
            <img
              src=${IMG + data}
              alt="Trendy Pants and Shoes"
              class="img-fluid rounded-start"
              width="250"
            />
           
          </div>
          <div class="col-md-8">
            <div class="card-body">
            <div style="justify-content: space-between">
           
              <h5 class="card-title">${Title}</h5>
             
              <a href="#pop-movie-title"><p onClick={document.getElementById("demo").innerHTML=""}> Close</p></a>        
              </div>
              <p class="card-text"><br>
                ${over}
              </p>
              <p class="card-text"><br>
              Release Date: ${rel}
            </p>
            <p class="card-text"><br>
            Total Votes: ${voteavg}
          </p>
             
            </div>
          </div>
        </div>
      </div>

   `)
    }
  }
  const selectTv = (id) => {
    let meal;
    meal = tv.find((meal) => meal.id === id)
    setSelectedMovie(meal)
    console.log(selectedMovie)
    const { name: Title, poster_path: data, overview: over, first_air_date: rel, vote_average: voteavg } = selectedMovie
    if (Title) {
      document.getElementById("demo").innerHTML = (`<br /><br /><br /><br />
        <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-3">
            <img
              src=${IMG + data}
              alt="Trendy Pants and Shoes"
              class="img-fluid rounded-start"
              width="250"
            />
           
          </div>
          <div class="col-md-8">
            <div class="card-body">
            <div style="justify-content: space-between">
           
              <h5 class="card-title">${Title}</h5>
             
              <a href="#pop-movie-title"><p onClick={document.getElementById("demo").innerHTML=""}> Close</p></a>        
              </div>
              <p class="card-text"><br>
                ${over}
              </p>
              <p class="card-text"><br>
              Release Date: ${rel}
            </p>
            <p class="card-text"><br>
            Total Votes: ${voteavg}
          </p>
             
            </div>
          </div>
        </div>
      </div>

   `)
    }
  }
  const addToFavoritesTv = (id) => {
    if (favoritesmovie.length >= 0 && favoritesmovie.length < 15) {
      const meal = tv.find((movie) => movie.id === id);
      const alreadyFavorite = favoritesmovie.find((movie) => movie.id === id);
      if (alreadyFavorite) {
        alert('Already Added')
        return
      }
      const updatedFavorites = [...favoritesmovie, meal]
      setFavoritesmovie(updatedFavorites)
      localStorage.setItem('favoritesMovie', JSON.stringify(updatedFavorites))
    }
    else {
      alert('You Can Only Add 15 Movies/Series To The Favorites')
    } 

  }
  const addToFavoritesMovie = (id) => {
    if (favoritesmovie.length >= 0 && favoritesmovie.length < 15) {
      const meal = movies.find((movie) => movie.id === id);
      const alreadyFavorite = favoritesmovie.find((movie) => movie.id === id);
      if (alreadyFavorite) {
        alert('Already Added')
        return
      }
      const updatedFavorites = [...favoritesmovie, meal]
      setFavoritesmovie(updatedFavorites)
      localStorage.setItem('favoritesMovie', JSON.stringify(updatedFavorites))
    }
    else {
      alert('You Can Only Add 15 Movies/Series To The Favorites')
    } 

  }
  let a=0
  movies.length<20? a=Math.floor(movies.length/5)+1:a=4
  console.log(a)
  let b=0
  tv.length<20?b=Math.floor(tv.length/5)+1 :b=4
  console.log(movies)
  return (
    <div className='pop-movie-title' id="pop-movie-title">
      <br></br><br></br><br></br>
      <h5 className='text-white m-4 ' style={{ fontFamily: 'Netflix Sans' }}>Your Search Result For <b style={{ 'font-size': '30px' }}>{search}</b><br /></h5>
      <h5 className='text-white m-4 ' style={{ fontFamily: 'Netflix Sans' }}>Movies<br /></h5>
      {movies.length > 0 ?
        <Carousel cols={5} rows={a}  >
          {movies.map((movie) => {
            const { poster_path, id ,title:Title} = movie
            return <Carousel.Item>

              <div className="okkk">

                <a href="#demo"><img width="100%" onClick={() => selectMovie(id)} src={IMG + poster_path} className='pop-movie' /></a>
                <button type="button" className="button-like btn btn-danger" onClick={() => addToFavoritesMovie(id)}><icons.AiOutlinePlus className='iconsize' ></icons.AiOutlinePlus>                            <span class="tooltiptext">Add To My List</span>
                </button>

              </div>


            </Carousel.Item>
          })}

          {/* ... */}
        </Carousel>
        : <h5 className='text-white text-center m-4 title' style={{ fontFamily: 'Netflix Sans' }}>No Results Found <br /></h5>

      }
      <h5 className='text-white m-4 ' style={{ fontFamily: 'Netflix Sans' }}><br></br>Tv<br /></h5>
      {tv.length > 0 ?
        <Carousel cols={5} rows={b}  >
          {tv.map((movie) => {
            const { poster_path, id } = movie
            return <Carousel.Item>

              <div>

                <a href="#demo"><img width="100%" onClick={() => selectTv(id)}  src={IMG + poster_path} className='pop-movie' /></a>
                <button type="button" className="button-like btn btn-danger" onClick={() => addToFavoritesTv(id)}><icons.AiOutlinePlus className='iconsize' ></icons.AiOutlinePlus>                            <span class="tooltiptext">Add To My List</span>
                </button>

              </div>


            </Carousel.Item>
          })}

          {/* ... */}
        </Carousel>
        : <center><h5 className='text-white m-4 title' style={{ fontFamily: 'Netflix Sans' }}>No Results Found <br /></h5></center>

      }
      <div id='demo'>

      </div>

    </div>
  )
}

export default Search