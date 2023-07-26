import Page from '../Pages/page'
import Carousel from 'better-react-carousel'
import React, { useState, useEffect, useContext } from "react";
import net_no_image from './net_no_image.jpg';
import * as icon from 'react-icons/ai'
import * as icons from 'react-icons/fa'
import '../index.css'
import gif from './loading.gif';
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

function Details() {
    const [movies, setMovies] = useState([]);
    const [video, setVideo] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(getSelectedFromLocalStorage())
    const [favoritesmovie, setFavoritesmovie] = useState(getFavoritesFromLocalStorage())
    const navigate = useNavigate();

    let id = localStorage.getItem('similar');
    id = JSON.parse(localStorage.getItem('similar'))
    let added = 0

    const API_URL = 'https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=62ebf6fda469c1af3fe79388b1ce3912'
    const API_URL_2 = 'https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=62ebf6fda469c1af3fe79388b1ce3912&language=en-US'
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                setMovies(data.results)
            })

        fetch(API_URL_2)
            .then((res1) => res1.json())
            .then(data1 => {
                setVideo(data1.results)
            })
      
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }

    }, [])
    let selectedmovie = localStorage.getItem('selectedMovie');

    if (selectedmovie) {
        selectedmovie = JSON.parse(localStorage.getItem('selectedMovie'))
    }
    else {
        selectedmovie = []
    }
    const IMG = 'https://image.tmdb.org/t/p/w500/'
    const selectMovie = (id) => {
        const mov = [];
        let mov1 = movies.find((mov) => mov.id === id)
        mov.push(mov1)
        setSelectedMovie(mov)
        localStorage.setItem('selectedMovie', JSON.stringify(mov))
        localStorage.setItem('similar', JSON.stringify(id))
        window.location.replace("/details")
        window.scrollTo(0, 0);
    }
    const addToFavorites = (id) => {
        if (favoritesmovie.length >= 0 && favoritesmovie.length < 15) {
            const mov = selectedMovie.find((movie) => movie.id === id);
            const alreadyFavorite = favoritesmovie.find((movie) => movie.id === id);
            if (alreadyFavorite) {
                alert('Already Added')
                return
            }
            const updatedFavorites = [...favoritesmovie, mov]
            setFavoritesmovie(updatedFavorites)
            localStorage.setItem('favoritesMovie', JSON.stringify(updatedFavorites))
            toast.success("Added To My List",{duration: 1500})
            setTimeout(redirect,1500)
        }

        else {
            alert('You Can Only Add 15 Movies/Series To The Favorites')
        }
    }
    const redirect = () => {
        window.location.reload()
      }
    const removeFromFavorites = (id) => {
        const updatedFavorites=favoritesmovie.filter((meal) => meal.id != id);     
        localStorage.setItem('favoritesMovie', JSON.stringify(updatedFavorites))
        toast.success("Removed From My List",{duration: 1500})
        setTimeout(redirect,1500)
    }

    const YT = 'https://www.youtube.com/watch?v='
    const videolink = () => {
        let vide = []
        if (video.length > 1) {
            vide = video.slice(0, 1)
            vide.map((vi) => {
                const { key } = vi
                const a = YT + key
                return (
                    window.open(a, "_blank")
                )
            })
        }
        else {
            return alert('Not Available')
        }
    }

    return <div>

        <br></br><br></br><br></br><br></br><br></br>
        <div><Toaster/></div>
        {
            selectedmovie.map((moviea) => {
                const { name, poster_path, id: ID, title, overview, release_date, first_air_date, vote_average, popularity } = moviea
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
                return <div>
                    <div className="main-detail-div col-md-12" key="ID">
                        <img src={data} className='col-md-3 movie-details'></img>
                        <div className='col-md-7' style={{ 'margin-left': '3vw' }}>
                            <h1 className='overview heading-detail' style={{ 'font-weight': '700', 'color': '#E50914'}}>{title}{name}</h1><br></br>
                            <h5 className='text-white overview overview-detail'><a className='title-detail'>Overview:</a> {overview}</h5><br></br>
                            <h5 className='text-white overview overview-detail'><a className='title-detail'>Date Of Release:</a> {release_date}{first_air_date}</h5><br></br>
                            <h5 className='text-white overview overview-detail'><a className='title-detail'>Vote:</a> {vote_average}</h5><br></br>
                            <h5 className='text-white overview overview-detail'><a className='title-detail'>Popularity:</a> {popularity}</h5><br></br>
                            <div style={{ display: 'flex' }} className='buttons-bottom'>
                                <div className='m-4 col-md-4'><button className='button-like-1 col-md-12 btn btn-outline-primary' onClick={videolink}><icons.FaPlay className='m-1'></icons.FaPlay>&nbsp;&nbsp;Watch Trailer</button></div>
                                {added == 1 ?
                                    <div>
                                        <div className='m-4 col-md-12'><button type="submit" className="button-like-1 btn col-md-12 btn-outline-success" onClick={() => removeFromFavorites(ID)}><icons.FaCheck className='m-1'></icons.FaCheck>&nbsp;&nbsp;Added To My List
                                        </button></div>
                                    </div>
                                    :
                                    <div>
                                        <div className='m-4 col-md-12'><button type="submit" className="button-like-1 btn col-md-12 btn-outline-danger" onClick={() => addToFavorites(ID)}><icons.FaPlus className='m-1'></icons.FaPlus>&nbsp;&nbsp;Add To My List
                                        </button>   </div>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            })}
        <div className='pop-movie-title' >       <br></br><br></br>
            <h5 className='text-white m-4' style={{ fontFamily: 'Work Sans'}}>Similar On Netflix<br /></h5>
{movies.length>1?
            <Carousel cols={5} rows={1} mobileBreakpoint={220} responsiveLayout={[
                {
                  breakpoint: 800,
                  cols: 2,
                  rows: 1,
                  gap: 10,
                  loop: true,
                  hideArrow:true
                }
              ]} loop>

                {
                    movies.length > 0 ? movies.map((movie) => {
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
                            <div className='card-img-top' key="id">
                                <img width="100%" onClick={() => selectMovie(id)} src={data} className='pop-movie' />
                                {added===0?<button type="button" className="button-like btn btn-danger" onClick={() => addToFavorites(id)}><icon.AiOutlinePlus className='iconsize' ></icon.AiOutlinePlus></button>
                :<button type="button" className="button-like btn btn-success" onClick={() => removeFromFavorites(id)}><icons.FaCheck className='iconsize' ></icons.FaCheck></button>
                }
                            </div>

                        </Carousel.Item>
                    })
                        : <h1>None </h1>
                }
            </Carousel>
            :<h3 className='text-center text-white fw-bold'><br></br>Not Available</h3>}
        </div>
        <br></br> </div>
}
export default Details
