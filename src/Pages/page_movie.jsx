// import Movies from '../Components/Movies'
import Page_Slides_movie from './page_slides_movie'
import Trendingmovies from '../Components/Trendingmovies'
import Recentmovie from '../Components/Recentmovie'
import Popularmovie from '../Components/Popularmovie'
const Page_movie  = () => {

        return (
                <div>
                        <Page_Slides_movie />
                        <Trendingmovies />
                        <h5 className='text-white m-4 title' style={{ fontFamily: 'Netflix Sans' }}>Popular On Netflix<br /></h5>
                        <Popularmovie />
                        <h5 className='text-white m-4 title' style={{ fontFamily: 'Netflix Sans' }}>Recent On Netflix<br /></h5>

                        <Recentmovie />
                </div>

        )

}
export default Page_movie
