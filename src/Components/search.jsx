import Carousel from 'better-react-carousel'
import React, { useState, useEffect } from "react";
import * as icons from 'react-icons/ai'
import '../index.css'
import gif from './loading.gif';

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
const getSelectedFromLocalStorage = () => {
  let selectedmovie = localStorage.getItem('selectedMovie');
  if (selectedmovie) {
    selectedmovie = JSON.parse(localStorage.getItem('selectedMovie'))
  }
  else {
    selectedmovie = []
  }

  return selectedmovie
}
const Search = () => {

  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [loading,setLoading] = useState(false)

  let search = (localStorage.getItem('search'))

  const [selectedMovie, setSelectedMovie] = useState(getSelectedFromLocalStorage())
  const [favoritesmovie, setFavoritesmovie] = useState(getFavoritesFromLocalStorage())
  if (search) {
    search = JSON.parse(localStorage.getItem('search'))
  }
  var newStr = search.split("");
  for (var i = 0; i < newStr.length; ++i) {
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
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        if(movies.length<11){
          setLoading(false)
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
    const mov=[];
    let mov1=movies.find((mov) => mov.id === id)
    mov.push(mov1)
    console.log(mov)
    setSelectedMovie(mov)
    localStorage.setItem('selectedMovie', JSON.stringify(mov))
    localStorage.setItem('similar',JSON.stringify(id))
    window.location.replace('http://localhost:3000/details');
  }
  const selectTv = (id) => {
    const mov=[];
    let mov1=tv.find((mov) => mov.id === id)
    mov.push(mov1)
    console.log(mov)
    setSelectedMovie(mov)
    localStorage.setItem('similar',JSON.stringify(id))
    localStorage.setItem('selectedMovie', JSON.stringify(mov))
    window.location.replace('http://localhost:3000/details/tv');
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
  movies.length/20? a=movies.length/5:a=Math.floor(movies.length/5)+1
  console.log(a)
  let b=0
  tv.length<20?b=Math.floor(tv.length/5)+1 :b=4
  console.log(movies)

  return (
    <div>
      {
               loading?<img src={gif} className="loading"></img>
   
    :<div className='pop-movie-title' id="pop-movie-title">
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

    </div>}
    </div>
  )
}

export default Search