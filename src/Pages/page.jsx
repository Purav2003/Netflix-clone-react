// import Movies from '../Components/Movies'
import Movies from '../Components/Movies'
import HomePageSlide from './home-page-slide'
import Tv from '../Components/Tv'
const Page = () => {
        return (
                <div>
                        <HomePageSlide />
                        <h5 className='text-white m-4 title' style={{ fontFamily: 'Netflix Sans' }}>Movies<br /></h5>
                        <Movies />
                        <h5 className='text-white m-4 title' style={{ fontFamily: 'Netflix Sans' }}>Tv<br /></h5>
                        <Tv />
                </div>

        )

}
export default Page
