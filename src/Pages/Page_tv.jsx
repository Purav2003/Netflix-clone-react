// import Movies from '../Components/Movies'
import Page_Slides from './page_slides'
import TrendingTvshows from '../Components/TrendingTv'
import Populartv from '../Components/Populartv'
import RecentTv from '../Components/RecentTv'
const Page_tv = () => {

        return (
                <div>
                        <Page_Slides />
                        <TrendingTvshows />
                        <h5 className='text-white m-4 title' style={{ fontFamily: 'Netflix Sans' }}>Popular Tv<br /></h5>
                        <Populartv />
                        <h5 className='text-white m-4 title' style={{ fontFamily: 'Netflix Sans' }}>Recent Tv<br /></h5>
                        <RecentTv />

                </div>

        )

}
export default Page_tv
