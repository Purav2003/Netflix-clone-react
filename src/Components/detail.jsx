import Carousel from 'better-react-carousel'
import React, { useState, useEffect, useContext } from "react";
import * as icon from 'react-icons/ai'
import * as icons from 'react-icons/fa'
import net_no_image from './net_no_image.jpg';
import { useNavigate } from 'react-router-dom';
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
    const [selectedMovie, setSelectedMovie] = useState(getSelectedFromLocalStorage())
    const [favoritesmovie, setFavoritesmovie] = useState(getFavoritesFromLocalStorage())
    const [video, setVideo] = useState([]);
    const [added, setAdded] = useState([])
    const navigate = useNavigate();

    let id = localStorage.getItem('similar');
    id = JSON.parse(localStorage.getItem('similar'))
    const API_URL = 'https://api.themoviedb.org/3/tv/' + id + '/similar?api_key=62ebf6fda469c1af3fe79388b1ce3912'
    const API_URL_2 = 'https://api.themoviedb.org/3/tv/' + id + '/videos?api_key=62ebf6fda469c1af3fe79388b1ce3912&language=en-US'

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
            const alreadyFavorite = favoritesmovie.find((movie) => movie.id === id);
            if (alreadyFavorite) {
                setAdded(1)
            }
            else {
                setAdded(0)
            }
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
        navigate('/details/tv', { replace:true });
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
        }
        else {
            alert('You Can Only Add 15 Movies/Series To The Favorites')
        }
    }
    const removeFromFavorites = (id) => {
        const updatedFavorites=favoritesmovie.filter((meal) => meal.id != id);     
        localStorage.setItem('favoritesMovie', JSON.stringify(updatedFavorites))
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
        {
            selectedmovie.map((moviea) => {
                const { name, poster_path, id: ID, title, overview, release_date, first_air_date, vote_average, popularity } = moviea
                let data=net_no_image
                {poster_path!==null?data=IMG + poster_path:data=data}
                return <div>
                    <div className="col-md-12 main-detail-div" key="ID">
                        <img src={data} className='col-md-3 movie-details'></img>
                        <div className='col-md-7' style={{ 'margin-left': '3vw' }}>
                            <h1 className='overview heading-detail' style={{ 'font-weight': '700', 'color': '#E50914', 'font-family': 'Netflix Sans' }}>{title}{name}</h1><br></br>
                            <h5 className='text-white overview overview-data' style={{  }}><a style={{ color: '#E50914', 'font-weight': '700' }}>Overview:</a> {overview}</h5><br></br>
                            <h5 className='text-white overview' style={{ 'lineHeight': '30px', 'textAlign': 'justify', 'font-family': 'Netflix Sans', 'font-weight': '100' }}><a style={{ color: '#E50914', 'font-weight': '700' }}>Date Of Release:</a> {release_date}{first_air_date}</h5><br></br>
                            <h5 className='text-white overview' style={{ 'lineHeight': '30px', 'textAlign': 'justify', 'font-family': 'Netflix Sans', 'font-weight': '100' }}><a style={{ color: '#E50914', 'font-weight': '700' }}>Vote:</a> {vote_average}</h5><br></br>
                            <h5 className='text-white overview' style={{ 'lineHeight': '30px', 'textAlign': 'justify', 'font-family': 'Netflix Sans', 'font-weight': '100' }}><a style={{ color: '#E50914', 'font-weight': '700' }}>Popularity:</a> {popularity}</h5><br></br>
                            <div style={{ display: 'flex' }} className='buttons-bottom'>
                                <div className='m-4 col-md-4'><button className='button-like-1 col-md-12 btn btn-outline-primary' onClick={videolink}><icons.FaPlay className='m-1'></icons.FaPlay>&nbsp;&nbsp;Watch Trailer</button></div>
                                {added == 1 ?
                                    <div>
                                        <div className='m-4 col-md-12'><a href='/details/tv'><button type="submit" className="button-like-1 btn col-md-12 btn-outline-success" onClick={() => removeFromFavorites(ID)}><icons.FaCheck className='m-1'></icons.FaCheck>&nbsp;&nbsp;Added To My List
                                        </button></a></div>
                                    </div>
                                    :
                                    <div>
                                        <div className='m-4 col-md-12'><a href='/details/tv'><button type="submit" className="button-like-1 btn col-md-12 btn-outline-danger" onClick={() => addToFavorites(ID)}><icons.FaPlus className='m-1'></icons.FaPlus>&nbsp;&nbsp;Add To My List
                                        </button></a>   </div>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            })}
        <div className='pop-movie-title' >       <br></br><br></br>
            <h5 className='text-white m-4' style={{ fontFamily: 'Netflix Sans' }}>Similar  On Netflix<br /></h5>
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
                    movies.map((movie) => {
                        const { poster_path, id } = movie
                        let data=net_no_image
                        {poster_path!==null?data=IMG + poster_path:data=data}                        
                        return <Carousel.Item>
                            <div className='card-img-top' key="id">
                                <img width="100%" onClick={() => selectMovie(id)} src={data} className='pop-movie' />
                                <button type="button" className="button-like btn btn-danger" onClick={() => addToFavorites(id)}><icon.AiOutlinePlus className='iconsize' ></icon.AiOutlinePlus>
                                    <span class="tooltiptext">Add To My List</span></button>

                            </div>

                        </Carousel.Item>
                       
                    }
                    )}

            </Carousel>
             :<h3 className='text-center text-white fw-bold'><br></br>Not Available</h3>}
        </div>


        <br></br> </div>


}
export default Details