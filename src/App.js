import './App.css';
import Navbar from './Pages/Navbar';
import Page from './Pages/page'
import Page_tv from './Pages/Page_tv';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Page_movie from './Pages/page_movie';
import Page_recently from './Pages/page_recently';
import MyList from './Pages/MyList';
import Footer from './Pages/footer';
import Search from './Components/search';
import Moviedetail from './Components/moviedetails';
import Tvdetail from './Components/tvdetails';
// import Movies from './Components/Movies';
function App() {
  return (
    <div>
  <Navbar />
      <Router>
        <Routes>
        <Route path='/' element={<Page />} />      
          <Route path='/home' element={<Page />} />      
          <Route path='https://main--stalwart-travesseiro-fbe352.netlify.app/Tv' element={<Page_tv />} />      
          <Route path='/Movies' element={<Page_movie/>} /> 
          <Route path='/Recently-Added' element={<Page_recently />}/>
          <Route path='/my-list' element={<MyList />}/>
          <Route path='/details' element={<Moviedetail />}/>
          <Route path='/details/tv' element={<Tvdetail />}/>
          <Route path='/Search' element={<Search />} />
       </Routes>
       </Router>
<Footer />

    </div>
  );
}

export default App;
