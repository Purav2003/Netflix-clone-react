// import Movies from '../Components/Movies'
import Navbar from './Navbar'
import Page_Slides_recently from './page_slides_recently'
import RecentlyAddedTv from '../Components/RecentlyAddedTv'
import RecentlyAddedMovie from '../Components/RecentlyAddedMovie'
import Footer from './footer'
const Page_recently  = () => {

        return (
                <div>
                        <Page_Slides_recently />
                        <RecentlyAddedTv />     
                        <RecentlyAddedMovie />    
                </div>

        )

}
export default Page_recently
