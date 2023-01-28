// import Movies from '../Components/Movies'
import Page_Slides_recently from './page_slides_recently'
import RecentlyAddedTv from '../Components/RecentlyAddedTv'
import RecentlyAddedmovie from '../Components/RecentlyAddedMovie'
const Page_recently  = () => {

        return (
                <div>
                        <Page_Slides_recently />
                        <h5 className='text-white m-4 title' style={{ fontFamily: 'Netflix Sans' }}>Recently Added Tv<br /></h5>
                        <RecentlyAddedTv />     
                        <h5 className='text-white m-4 title' style={{ fontFamily: 'Netflix Sans' }}>Recently Added Movie<br /></h5>
                        <RecentlyAddedmovie />    
                </div>

        )

}
export default Page_recently
