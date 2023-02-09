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

const Movie_api = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(getSelectedFromLocalStorage())
  const [loading,setLoading] = useState(false)
  const [favoritesmovie, setFavoritesmovie] = useState(getFavoritesFromLocalStorage())


  let genre = (localStorage.getItem('genre'))
  genre = JSON.parse(localStorage.getItem('genre'))
  let page = (localStorage.getItem('page'))
  page = JSON.parse(localStorage.getItem('page'))

  const API_URL = 'https://api.themoviedb.org/3/movie/' + genre + '?api_key=62ebf6fda469c1af3fe79388b1ce3912&page=' + page
  console.log(API_URL)
  const IMG = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setLoading(false)
        setMovies(data.results)
      })
      if(loading){
        return <h1>sojo</h1>
      }

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

  const addToFavorites = (id) => {
    if (favoritesmovie.length >= 0 && favoritesmovie.length < 15) {
      const mov = movies.find((movie) => movie.id === id);
      const alreadyFavorite = favoritesmovie.find((movie) => movie.id === id);
      if (alreadyFavorite) {
        alert('Already Added')
        return
      }
      const updatedFavorites = [...favoritesmovie, mov]
      setFavoritesmovie(updatedFavorites)
      localStorage.setItem('favoritesMovie', JSON.stringify(updatedFavorites))
     }
    else {
      alert('You Can Only Add 15 Movies/Series To The Favorites')
    }

  }



  return (

    <div className='pop-movie-title' id="pop-movie-title">
      {
          loading?<img src={gif} className="loading"></img>
        
      :(<div>
      <Carousel cols={5} rows={1} loop >
        {movies.map((movie) => {
          const { poster_path, id } = movie
          return <Carousel.Item>

            <div>

              <img width="100%" onClick={() => selectMovie(id)} src={IMG + poster_path} className='pop-movie' />
              <button type="button" className="button-like btn btn-danger" onClick={() => addToFavorites(id)}><icons.AiOutlinePlus className='iconsize' ></icons.AiOutlinePlus>
                <span class="tooltiptext">Add To My List</span>
              </button>

            </div>


          </Carousel.Item>
        })}

      </Carousel></div>)}


    </div>
  )
}

export default Movie_api