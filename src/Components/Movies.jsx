
import Movie_api from "./movie_api"
const Movies = () => {
    const IMG = 'https://image.tmdb.org/t/p/w500/'
    const page="21"
    localStorage.setItem('page',JSON.stringify(page))
    const genre="popular"
    localStorage.setItem('genre',JSON.stringify(genre))
        return (
                <div>
                    < Movie_api/>                  
                </div>

        )

}
export default Movies
