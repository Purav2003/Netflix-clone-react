import Page from '../Pages/page'
import Carousel from 'better-react-carousel'
import React, { useState, useEffect, useContext } from "react";
import * as icons from 'react-icons/ai'
import '../index.css'
import gif from './loading.gif';
import net_no_image from './net_no_image.jpg';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

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


const Tv_api = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] =useState(getSelectedFromLocalStorage())
  const [loading,setLoading] = useState(false)
  const [favoritesmovie, setFavoritesmovie] = useState(getFavoritesFromLocalStorage())
  const navigate = useNavigate();
  let genre = (localStorage.getItem('genre'))
  genre = JSON.parse(localStorage.getItem('genre'))
  let page = (localStorage.getItem('page'))
  page = JSON.parse(localStorage.getItem('page'))

  const API_URL = 'https://api.themoviedb.org/3/tv/' + genre + '?api_key=62ebf6fda469c1af3fe79388b1ce3912&page=' + page
  const IMG = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json()) 
      .then(data => {
        setLoading(false)
        setMovies(data.results)
      })
      const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, [])


  const selectMovie = (id) => {
    const mov=[];
    let mov1=movies.find((mov) => mov.id === id)
    mov.push(mov1)
    setSelectedMovie(mov)
    localStorage.setItem('selectedMovie', JSON.stringify(mov))
    localStorage.setItem('similar',JSON.stringify(id))
    navigate('/details/tv', { replace:true });
    window.scrollTo(0, 0);       
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
      toast.success("Added To My List",{duration: 1500})
    }
    else {
      alert('You Can Only Add 15 Movies/Series To The Favorites')
    }
  }

  return (
    <>
            <div><Toaster/></div>

    <div className='pop-movie-title' id="pop-movie-title">

      {
          loading?<img src={gif} className="loading"></img>
        
      :(
      <Carousel cols={5} rows={1} scrollSnap={true} mobileBreakpoint={220} responsiveLayout={[
        {
          breakpoint: 800,
          scrollSnap:true,
          cols: 2,
          rows: 1,
          gap: 10,
          loop: true,
          hideArrow:true
        }
      ]} loop>
        {movies.map((movie) => {
          const { poster_path, id } = movie
          let data=net_no_image
          {poster_path!==null?data=IMG + poster_path:data=data}          
          return <Carousel.Item>
            <div className='card-img-top' key="id">
              <img width="100%" onClick={() => selectMovie(id)} src={data} className='pop-movie' />
              <button type="button" className="button-like btn btn-danger" onClick={() => addToFavorites(id)}><icons.AiOutlinePlus className='iconsize' ></icons.AiOutlinePlus>
              <span class="tooltiptext">Add To My List</span></button>
              
            </div>

          </Carousel.Item>
        })}

        {/* ... */}
      </Carousel>)}

    </div>
    </>
  )

}

export default Tv_api