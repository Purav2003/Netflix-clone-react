// import Movies from '../Components/Movies'
import Tv_api from "./tv_api"
const Populartv = () => {
    const IMG = 'https://image.tmdb.org/t/p/w500/'
    const page="7"
    localStorage.setItem('page',JSON.stringify(page))
    const genre="popular"
    localStorage.setItem('genre',JSON.stringify(genre))
        return (
                <div>
                    <Tv_api />
                  
                </div>

        )

}
export default Populartv
