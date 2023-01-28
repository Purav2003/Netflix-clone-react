// import Movies from '../Components/Movies'
import Navbar from './Navbar'
import Page_Slides from './page_slides'
import RecentTvshows from '../Components/RecentTvshows'
import TrendingTvshows from '../Components/TrendingTv'
import PopularTvshows from '../Components/PopularTvshows'
import Footer from './footer'
const Page_tv = () => {

        return (
                <div>
                        <Page_Slides />
                        <TrendingTvshows />
                        <PopularTvshows />
                        <RecentTvshows />

                </div>

        )

}
export default Page_tv
