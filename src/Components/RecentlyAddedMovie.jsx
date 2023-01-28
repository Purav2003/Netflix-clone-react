// import Movies from '../Components/Movies'
import Movie_api from './moviee_api'
const RecentlyAddedmovie = () => {
    const IMG = 'https://image.tmdb.org/t/p/w500/'
    const page="2"
    localStorage.setItem('page',JSON.stringify(page))
    const genre="popular"
    localStorage.setItem('genre',JSON.stringify(genre))
        return (
                <div>
                    <Movie_api />

                  
                </div>

        )

}
export default RecentlyAddedmovie
