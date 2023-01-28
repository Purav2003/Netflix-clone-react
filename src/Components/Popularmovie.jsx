// import Movies from '../Components/Movies'
import Movie_api from "./movie_api"
const Popularmovie = () => {
    const IMG = 'https://image.tmdb.org/t/p/w500/'
    const page="7"
    localStorage.setItem('page',JSON.stringify(page))
    const genre="popular"
    localStorage.setItem('genre',JSON.stringify(genre))
        return (
                <div>
                    <Movie_api />

                  
                </div>

        )

}
export default Popularmovie
