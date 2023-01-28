import './App.css';
import Navbar from './Pages/Navbar';
import Page_Slides from './Pages/page_slides';
import Page from './Pages/page'
import Page_tv from './Pages/Page_tv';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Page_movie from './Pages/page_movie';
import Page_recently from './Pages/page_recently';
import MyList from './Pages/MyList';
import Footer from './Pages/footer';
import Search from './Components/search';
// import Movies from './Components/Movies';
function App() {
  return (
    <div>
<Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Page />} />      

          <Route path='/Tv' element={<Page_tv />} />      
          <Route path='/Movies' element={<Page_movie/>} /> 
          <Route path='/Recently-Added' element={<Page_recently />}/>
          <Route path='/my-list' element={<MyList />}/>
          <Route path='/Search' element={<Search />} />
       </Routes>
       </Router>
<Footer />

    </div>
  );
}

export default App;
