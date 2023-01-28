// import Movies from '../Components/Movies'
import Navbar from './Navbar'
import Page_Slides_movie from './page_slides_movie'
import Recentmovies from '../Components/Recentmovies'
import Trendingmovies from '../Components/Trendingmovies'
import Popularmovies from '../Components/Popularmovies'
import Footer from './footer'
const Page_movie  = () => {

        return (
                <div>
                        <Page_Slides_movie />
                        <Trendingmovies />
<Popularmovies />
                <Recentmovies />
                </div>

        )

}
export default Page_movie
