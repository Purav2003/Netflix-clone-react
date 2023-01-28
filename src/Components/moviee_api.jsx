import Page from '../Pages/page'
import Carousel from 'better-react-carousel'
import React, { useState, useEffect, useContext } from "react";
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


const Trial = () =>{
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)
    const [favoritesmovie, setFavoritesmovie] = useState(getFavoritesFromLocalStorage())
    
  // const [selectedMovie, setSelectedMovie] = useState(null)
  
    let genre = (localStorage.getItem('genre'))
    genre=JSON.parse(localStorage.getItem('genre'))
  console.log(genre)
   
     let page = (localStorage.getItem('page'))
     page=JSON.parse(localStorage.getItem('page'))



  // const [favoritesmovie, setFavoritesmovie] = useState(getFavoritesFromLocalStorage())
  const API_URL = 'https://api.themoviedb.org/3/movie/' +  genre  + '?api_key=62ebf6fda469c1af3fe79388b1ce3912&page=' + page 
  console.log(API_URL)
  const IMG = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
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

const addToFavorites = (id) =>{
    if (favoritesmovie.length >= 0 && favoritesmovie.length < 15) {
        const meal = movies.find((movie) => movie.id === id);
        const alreadyFavorite = favoritesmovie.find((movie) => movie.id === id);
        if (alreadyFavorite) {
            alert('Already Added')
            return
        }
        const updatedFavorites = [...favoritesmovie, meal]
        setFavoritesmovie(updatedFavorites)
        localStorage.setItem('favoritesMovie',JSON.stringify(updatedFavorites))
    }
    else {
        alert('You Can Only Add 15 Movies/Series To The Favorites')
    }
}
const MyDot = () => (
    <span
      style={{
        display: 'inline-block !important',        
        background: 'red'
      }}
    ></span>
  )


return (
    <div className='pop-movie-title' id = "pop-movie-title">
        <Carousel cols={5} rows={1} loop >
            {movies.map((movie) => {
                const { poster_path, id } = movie
                return <Carousel.Item>
                    
                    <div>

                        <a href="#demo"><img width="100%" onClick={() => selectMovie(id)} src={IMG + poster_path} className='pop-movie' /></a>
                        <button type="button" className="button-like btn btn-danger" onClick={() => addToFavorites(id)}><icons.AiOutlinePlus className='iconsize' ></icons.AiOutlinePlus>                            <span class="tooltiptext">Add To My List</span>
</button>         

                        </div>
                        

                </Carousel.Item>
            })}

            {/* ... */}
        </Carousel>
   <div id='demo'>

   </div>
    </div>
)
}

export default Trial