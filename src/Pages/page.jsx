// import Movies from '../Components/Movies'
import Navbar from './Navbar'
import Movies from '../Components/Movies'
import HomePageSlide from './home-page-slide'
import Tv from '../Components/Tv'
import Footer from './footer'
const Page = () => {
        console.log(window.location.href)

        return (
                <div>
                        <HomePageSlide />
                        <Movies />
                        <Tv />
                </div>

        )

}
export default Page
