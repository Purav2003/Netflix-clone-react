import st from './images/st.jpg'
import wed from './images/wed.jpg'
import friends from './images/friends.jpg'
import stt from './images/st-t.png'
import wedt from './images/wed-t.png'
import friendst from './images/friends-t.png'

const Page_Slides = () => {

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
                <div className="carousel-item active ">
                    <img src={st} className="d-block w-100 img-slide" alt="Sunset Over the City" />
                    <div className="carousel-caption d-none d-md-block">

                        <div className="stt-1"><br></br><br></br>
                            <img src={stt} style={{ width: '450px' }} /><br></br><br></br><br></br>
                            <h3 className='title-slide'>Stranger Things</h3><br></br>
                            <h3 className='title-slide-1'>2016 &nbsp;|&nbsp; <a>U/A 16+</a> &nbsp;|&nbsp; 4 Seasons &nbsp;|&nbsp; Horror TV Serials</h3>
                            <br></br>
                            <h3 className='title-slide-2'>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</h3><br></br>
                            <h3 className='title-slide-3'><a>Starring:</a>&nbsp;Winona Ryder,David Harbour,Millie Bobby Brown</h3>
                            <h3 className='title-slide-4'><a>Creators:</a>&nbsp;The Duffer Brothers</h3>
                            <br></br>
                            <br></br>
                            <br></br></div>


                    </div>
                </div>

                <div className="carousel-item">
                    <img src={wed} className="d-block w-100 img-slide" alt="Canyon at Nigh" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="stt-1"><br></br><br></br>
                            <img src={wedt} style={{ width: '450px' }} /><br></br><br></br><br></br>
                            <h3 className='title-slide'>Wednesday</h3><br></br>
                            <h3 className='title-slide-1'>2022 &nbsp;|&nbsp; <a>U/A 13+</a> &nbsp;|&nbsp; 1 Season &nbsp;|&nbsp; TV Comedies</h3>
                            <br></br>
                            <h3 className='title-slide-2'>Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.</h3><br></br>
                            <h3 className='title-slide-3'><a>Starring:</a>&nbsp;Jenna Ortega,Gwendoline Christie,Riki Lindhome</h3>
                            <h3 className='title-slide-4'><a>Creators:</a>&nbsp;Alfred Gough,Miles Millar</h3>
                            <br></br>
                            <br></br>
                            <br></br></div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={friends} className="d-block w-100 img-slide" alt="Cliff Above a Stormy Sea" />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="stt-1 stt-2"><br></br><br></br>
                            <img src={friendst} style={{ width: '450px' }} /><br></br><br></br><br></br>
                            <h3 className='title-slide'>Friends</h3><br></br>
                            <h3 className='title-slide-1'>1994 &nbsp;|&nbsp; <a>U/A 13+</a> &nbsp;|&nbsp; 10 Seasons &nbsp;|&nbsp; TV Comedies</h3>
                            <br></br>
                            <h3 className='title-slide-2'>This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan.</h3><br></br>
                            <h3 className='title-slide-3'><a>Starring:</a>&nbsp;Jennifer Aniston,Courteney Cox,Lisa Kudrow</h3>
                            <h3 className='title-slide-4'><a>Creators:</a>&nbsp;David Crane,Marta Kauffman</h3>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
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

export default Page_Slides