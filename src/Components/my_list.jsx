// import { useState } from "react";
import Carousel from 'better-react-carousel'
import React, { useState, useEffect } from "react";
import * as icons from 'react-icons/ai'

function My_list() {
    const [selectedMovie, setSelectedMovie] = useState(null)
    let favoritesmovie = localStorage.getItem('favoritesMovie');
    if (favoritesmovie) {
        favoritesmovie = JSON.parse(localStorage.getItem('favoritesMovie'))
    }
    else {
        favoritesmovie = []
    }
    const IMG = 'https://image.tmdb.org/t/p/w500/'
    const selectMovie = (id) => {
        let meal;
        meal = favoritesmovie.find((meal) => meal.id === id)
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
                 
                  <a href="/"><p onClick={document.getElementById("demo").innerHTML=""}> Close</p></a>        
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
    const removeFromFavorites = (id) => {
        const updatedFavorites = favoritesmovie.filter((meal) => meal.id != id);
        favoritesmovie=updatedFavorites
        localStorage.setItem('favoritesMovie',JSON.stringify(favoritesmovie))
    }


    return (
        <section>
                      
{
          
           <div className='title-list'><h5 className='text-white m-4' style={{ fontFamily: 'Netflix Sans','margin-left':'3vw' }}><br />Your Saved Tv Or Movie</h5>
            <Carousel cols={5} rows={3}>
                {
                favoritesmovie.map((moviea) => {
                    const { poster_path, id } = moviea
                    return <Carousel.Item>
                        <div className='card-img-top'>
                            <a href="#demo"><img width="100%" onClick={() => selectMovie(id)} src={IMG + poster_path} className='pop-movie' /></a></div>
                            <a href='/my-list'><button type="button" className="button-like btn btn-danger" onClick={() => removeFromFavorites(id)}><icons.AiOutlineDelete className='iconsize'></icons.AiOutlineDelete></button>         </a>
                    </Carousel.Item>
                })
               
            }
            </Carousel>
             <br></br><br></br><center><h3 className='text-white fw-bold'>You Don't Have Any Saved Movie / Tv<br></br><br></br></h3></center>
             </div>
          
        }
          <div id="demo">
                
                </div>
        </section>
    )

}
export default My_list