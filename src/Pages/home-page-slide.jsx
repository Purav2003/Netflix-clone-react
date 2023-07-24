import mm from './images/missionm.jpg'
import mh from './images/mh.jpg'
import narcos from './images/narcos.jpg'
import mmt from './images/mmt.png'
import mht from './images/mht.png'
import React, { useState, useEffect } from "react";
import narcost from './images/narcost.png'
import { useNavigate } from 'react-router-dom';

const HomePageSlide = () => {
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

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(getSelectedFromLocalStorage())


    const selectMovie = (id,data) => {
        let mov=[]
        const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=62ebf6fda469c1af3fe79388b1ce3912&query='+data
        console.log(API_URL)
        fetch(API_URL)
        .then((res) => res.json())
        .then(data => {
            setMovies(data.results)
        })
        mov=movies
        console.log(movies)               
        setSelectedMovie(mov)
        localStorage.setItem('selectedMovie', JSON.stringify(mov))
        localStorage.setItem('similar', JSON.stringify(id))
        // window.location.replace("/details")
        window.scrollTo(0, 0);
    }


    return (
        <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active" onClick={() => selectMovie(778946,"Mission Majnu")}>
                    <img src={mm} className="d-block w-100 img-slide" alt="Sunset Over the City" />
                    <div className="carousel-caption d-none d-md-block">

                        <div className="stt-1 stt-2"><br></br><br></br><br></br>
                            <img src={mmt} style={{ width: '450px' }} /><br></br><br></br><br></br>
                            <h3 className='title-slide'>Mission Majnu</h3><br></br>
                            <h3 className='title-slide-1'>2023 &nbsp;|&nbsp; <a>U/A 16+</a> &nbsp;|&nbsp; 2h 9m &nbsp;|&nbsp; Hindi-Language Movies</h3>
                            <br></br>
                            <h3 className='title-slide-2'>In the 1970s, an undercover Indian spy takes on a deadly mission to expose a covert nuclear weapons program in the heart of Pakistan.</h3><br></br>
                            <h3 className='title-slide-3'><a>Starring:</a>&nbsp;Sidharth Malhotra,Rashmika Mandanna,Parmeet Sethi</h3>
                            <h3 className='title-slide-4'></h3>
                            <br></br>
                            <br></br>
                            <br></br></div>


                    </div>
                </div>

                <div className="carousel-item">
                    <img src={mh} className="d-block w-100 img-slide" alt="Canyon at Nigh" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="stt-1"><br></br><br></br>
                            <img src={mht} style={{ width: '450px' }} /><br></br><br></br><br></br><br></br>
                            <h3 className='title-slide'>Money Heist</h3><br></br>
                            <h3 className='title-slide-1'>2017 &nbsp;|&nbsp; <a>A</a> &nbsp;|&nbsp; 5 Seasons &nbsp;|&nbsp; TV Thrillers</h3>
                            <br></br>
                            <h3 className='title-slide-2'>Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.</h3><br></br>
                            <h3 className='title-slide-3'><a>Starring:</a>&nbsp;Úrsula Corberó,Álvaro Morte,Itziar Ituño</h3>
                            <h3 className='title-slide-4'><a>Creators:</a>&nbsp;Álex Pina</h3>
                            <br></br>
                            <br></br>
                            <br></br></div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={narcos} className="d-block w-100 img-slide" alt="Cliff Above a Stormy Sea" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="stt-1 stt-2"><br></br><br></br><br></br>
                            <img src={narcost} style={{ width: '450px' }} /><br></br><br></br><br></br>
                            <h3 className='title-slide'>Narcos</h3><br></br>
                            <h3 className='title-slide-1'>2015 &nbsp;|&nbsp; <a>A</a> &nbsp;|&nbsp; 3 Seasons &nbsp;|&nbsp; TV Thrillers</h3>
                            <br></br>
                            <h3 className='title-slide-2'>The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series.</h3><br></br>
                            <h3 className='title-slide-3'><a>Starring:</a>&nbsp;Wagner Moura,Pedro Pascal,Boyd Holbrook</h3>
                            <h3 className='title-slide-4'><a>Creators:</a>&nbsp;Chris Brancato,Carlo Bernard,Doug Miro</h3>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default HomePageSlide