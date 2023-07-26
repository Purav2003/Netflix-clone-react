import Carousel from 'better-react-carousel'
import React, { useState, useEffect } from "react";
import * as icons from 'react-icons/ai'
import * as icon from 'react-icons/fa'

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
const Search = () => {

  const [movies, setMovies] = useState([]);
  let added = 0
  const [tv, setTv] = useState([]);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

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
  const IMG = 'https://image.tmdb.org/t/p/w500/'
  const API_URL1 = 'https://api.themoviedb.org/3/search/tv?api_key=62ebf6fda469c1af3fe79388b1ce3912&query=' + data

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
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
        setTv(data.results)
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
    console.log(mov)
    setSelectedMovie(mov)
    localStorage.setItem('selectedMovie', JSON.stringify(mov))
    localStorage.setItem('similar',JSON.stringify(id))
    navigate('/details', { replace:true });
    window.scrollTo(0, 0);     }
    
  const selectTv = (id) => {
    const mov=[];
    let mov1=tv.find((mov) => mov.id === id)
    mov.push(mov1)
    console.log(mov)
    setSelectedMovie(mov)
    localStorage.setItem('similar',JSON.stringify(id))
    localStorage.setItem('selectedMovie', JSON.stringify(mov))
    navigate('/details/tv', { replace:true });
    window.scrollTo(0, 0);   
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
      toast.success("Added To My List",{duration: 1500})
    }
    else {
      alert('You Can Only Add 15 Movies/Series To The Favorites')
    } 

  }
  const removeFromFavorites = (id) => {
    const updatedFavorites=favoritesmovie.filter((meal) => meal.id != id);     
    localStorage.setItem('favoritesMovie', JSON.stringify(updatedFavorites))
    toast.success("Removed From My List",{duration: 1500})
    setTimeout(redirect,1500)

}
const redirect = () => {
  window.location.reload()

}
  let a=0
  movies.length/20? a=movies.length/5:a=Math.floor(movies.length/5)+1
  let b=0
  tv.length<20?b=Math.floor(tv.length/5)+1 :b=4

  return (
    <div>
              <div><Toaster/></div>

      {
               loading?<img src={gif} className="loading"></img>
   
    :<div className='pop-movie-title' id="pop-movie-title">
      <br></br><br></br><br></br>
      
      <h5 className='text-white m-4 ' style={{ fontFamily: 'Work Sans' }}>Your Search Result For <b style={{ 'font-size': '30px' }}>{search}</b><br /></h5>    
      <h5 className='text-white m-4 ' style={{ fontFamily: 'Work Sans' }}>Movies<br /></h5>
      {movies.length > 0 ?
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
        ]} loop >
          {movies.map((movie) => {
            const { poster_path, id ,title:Title} = movie
            let data=net_no_image
                {poster_path!==null?data=IMG + poster_path:data=data
                  const alreadyFavorite = favoritesmovie.find((movie) => movie.id === id);           
                  if (alreadyFavorite) {
                      added=1
                  }
                else {
                    added=0
                }
                }
            return <Carousel.Item>

              <div className="okkk">

                <a href="#demo"><img width="100%" onClick={() => selectMovie(id)} src={data} className='pop-movie' /></a>
                {added===0?<button type="button" className="button-like btn btn-danger" onClick={() => addToFavoritesMovie(id)}><icons.AiOutlinePlus className='iconsize' ></icons.AiOutlinePlus></button>
                :<button type="button" className="button-like btn btn-success" onClick={() => removeFromFavorites(id)}><icon.FaCheck className='iconsize' ></icon.FaCheck></button>
                }


              </div>


            </Carousel.Item>
          })}

          {/* ... */}
        </Carousel>
        : <h5 className='text-white text-center m-4 title' style={{ fontFamily: 'Work Sans' }}>No Results Found <br /></h5>

      }
      <h5 className='text-white m-4 ' style={{ fontFamily: 'Work Sans' }}><br></br>Tv<br /></h5>
      {tv.length > 0 ?
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
        ]} loop >
          {tv.map((movie) => {
            const { poster_path, id } = movie
            let data=net_no_image
            {poster_path!==null?data=IMG + poster_path:data=data
              const alreadyFavorite = favoritesmovie.find((movie) => movie.id === id);           
              if (alreadyFavorite) {
                  added=1
              }
            else {
                added=0
            }
            }            
            return <Carousel.Item>

              <div>

                <a href="#demo"><img width="100%" onClick={() => selectTv(id)}  src={data} className='pop-movie' /></a>
                {added===0?<button type="button" className="button-like btn btn-danger" onClick={() => addToFavoritesTv(id)}><icons.AiOutlinePlus className='iconsize' ></icons.AiOutlinePlus></button>
                :<button type="button" className="button-like btn btn-success" onClick={() => removeFromFavorites(id)}><icon.FaCheck className='iconsize' ></icon.FaCheck></button>
                }


              </div>


            </Carousel.Item>
          })}

          {/* ... */}
        </Carousel>
        : <center><h5 className='text-white m-4 title' style={{ fontFamily: 'Work Sans' }}>No Results Found <br /></h5></center>

      }

    </div>}
    </div>
  )
}

export default Search