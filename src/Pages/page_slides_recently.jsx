import rn from './images/rn.jpg'
import ext from './images/ext.jpg'
import lucy from './images/lucy.jpg'
import rnt from './images/rnt.png'
import extt from './images/extt.png'
import lucyt from './images/lucyt.png'

const Page_Slides_recently = () => {

    return (
        <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>

            <div className="carousel-inner">
            <div className="carousel-item active">
                    <img src={lucy} className="d-block w-100 img-slide" alt="Cliff Above a Stormy Sea" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="stt-1 stt-2">
                            <img src={lucyt} style={{ width: '450px' }} />
                            <h3 className='title-slide'>Lucy</h3><br></br>
                            <h3 className='title-slide-1'>2014 &nbsp;|&nbsp; <a>A</a> &nbsp;|&nbsp; 1h 29m &nbsp;|&nbsp; Action & Adventure</h3>
                            <br></br>
                            <h3 className='title-slide-2'>When a young American in Taiwan becomes an unwilling drug mule, the high-tech narcotics get released into her system and activate superhuman powers.</h3><br></br>
                            <h3 className='title-slide-3'><a>Starring:</a>&nbsp;Scarlett Johansson,Morgan Freeman,Choi Min-sik</h3>
                            <h3 className='title-slide-4'></h3>
                            <br></br>
                            <br></br>
                          
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src={rn} className="d-block w-100 img-slide" alt="Sunset Over the City" />
                    <div className="carousel-caption d-none d-md-block">

                        <div className="stt-1"><br></br><br></br>
                            <img src={rnt} style={{ width: '450px' }} /><br></br><br></br><br></br>
                            <h3 className='title-slide'>Red Notice</h3><br></br>
                            <h3 className='title-slide-1'>2021 &nbsp;|&nbsp; <a>U/A 13+</a> &nbsp;|&nbsp; 1h 58m &nbsp;|&nbsp; Crime Movies</h3>
                            <br></br>
                            <h3 className='title-slide-2'>An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.</h3><br></br>
                            <h3 className='title-slide-3'><a>Starring:</a>&nbsp;Dwayne Johnson,Ryan Reynolds,Gal Gadot</h3>
                            <h3 className='title-slide-4'></h3>
                            <br></br>
                            <br></br>
                            <br></br></div>


                    </div>
                </div>

                <div className="carousel-item">
                    <img src={ext} className="d-block w-100 img-slide" alt="Canyon at Nigh" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="stt-1 stt-2"><br></br><br></br><br></br>
                            <img src={extt} style={{ width: '450px' }} /><br></br><br></br><br></br>
                            <h3 className='title-slide'>Extraction</h3><br></br>
                            <h3 className='title-slide-1'>2020 &nbsp;|&nbsp; <a>A</a> &nbsp;|&nbsp; 1h 57m &nbsp;|&nbsp; Movie Based on Books</h3>
                            <br></br>
                            <h3 className='title-slide-2'>A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.</h3><br></br>
                            <h3 className='title-slide-3'><a>Starring:</a>&nbsp;Chris Hemsworth,Rudhraksh Jaiswal,Randeep Hooda</h3>
                            <h3 className='title-slide-4'></h3>
                            <br></br>
                            <br></br>
                            <br></br></div>
                    </div>
                </div>

              
            </div>
            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>
    )
}

export default Page_Slides_recently