// import { useState } from "react";
import Carousel from 'better-react-carousel'
import React, { useState, useEffect } from "react";
import * as icons from 'react-icons/ai'
import net_no_image from './net_no_image.jpg';

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
function My_list() {
  const [selectedMovie, setSelectedMovie] = useState(getSelectedFromLocalStorage())

  useEffect(() => {
   
    const handleContextmenu = e => {
      e.preventDefault()
  }
  document.addEventListener('contextmenu', handleContextmenu)
  return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu)
  }
}, [])
  let favoritesmovie = localStorage.getItem('favoritesMovie');

  if (favoritesmovie) {
    favoritesmovie = JSON.parse(localStorage.getItem('favoritesMovie'))

  }
  else {
    favoritesmovie = []
  }

  const IMG = 'https://image.tmdb.org/t/p/w500/'
  const selectMovie = (id) => {
    const mov = [];
    let mov1 = favoritesmovie.find((mov) => mov.id === id)
    mov.push(mov1)
    console.log(mov)
    setSelectedMovie(mov)

    localStorage.setItem('selectedMovie', JSON.stringify(mov))
    localStorage.setItem('similar', JSON.stringify(id))
    mov.map((item) => {
      const { title: Title } = item
      if (Title) {
        window.location.replace('http://localhost:3000/details');

      }

    })
    mov.map((item) => {
      const { title: Title } = item
      if (!Title) {
        window.location.replace('http://localhost:3000/details/tv');
      }

    })
  }

  const removeFromFavorites = (id) => {
    const updatedFavorites = favoritesmovie.filter((meal) => meal.id != id);
    favoritesmovie = updatedFavorites
    localStorage.setItem('favoritesMovie', JSON.stringify(favoritesmovie))
  }

  const remove = () => {
    const updatedFavorites = []
    localStorage.setItem('favoritesMovie', JSON.stringify(updatedFavorites))
    window.location.replace('http://localhost:3000/my-list');

  }
  return (
    <section>
      <br></br>
      {

        <div className='title-list'>
          <div className='row'>
            <h5 className='text-white m-4 col-md-8' style={{ fontFamily: 'Netflix Sans', 'margin-left': '3vw' }}><br />Your Saved Tv Or Movie</h5>
            {favoritesmovie.length > 0 ? <button className='col-md-2 btn btn-outline-danger m-4' onClick={remove}>Remove All</button> : <h1></h1>}</div>
          {
            favoritesmovie.length > 0 ?
              <Carousel cols={5} rows={3}>
                {
                  favoritesmovie.map((moviea) => {
                    const { poster_path, id } = moviea
                    let data=net_no_image
                {poster_path!==null?data=IMG + poster_path:data=data}
                    return <Carousel.Item>
                      <div className='card-img-top'>
                        <img width="100%" onClick={() => selectMovie(id)} src={data} className='pop-movie' /></div>
                      <a href='/my-list'><button type="button" className="button-like btn btn-danger" onClick={() => removeFromFavorites(id)}><icons.AiOutlineDelete className='iconsize'></icons.AiOutlineDelete></button>         </a>
                    </Carousel.Item>
                  })

                }
              </Carousel>
              : <div>
                <br></br><center><h3 className='text-white fw-bold'>You Don't Have Any Saved Movie / Tv<br></br><br></br></h3></center></div>

          }             </div>



      }

    </section>
  )

}
export default My_list