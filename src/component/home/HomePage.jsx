import "./HomePage.scss"
import {CardContent} from "../popular_destinations/Popular";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const popularContent = [
    {

        href: 'https://themes.themegoods.com/grandtour/demo/destination/tokyo/',
        src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg',
        country: 'Tokyo'
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/destination/seoul/',
        src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg',
        country: 'Seoul'
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/destination/paris/',
        src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg',
        country: 'Paris'
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/destination/london/',
        src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg',
        country: 'London'
    }

];


const month = [

    {
        value: "",
        title: "Any Month"
    },
    {
        value: "january",
        title: "January"
    },
    {
        value: "february",
        title: "February"
    },
    {
        value: "march",
        title: "March"
    },
    {
        value: "april",
        title: "April"
    },
    {
        value: "may",
        title: "May"
    },
    {
        value: "june",
        title: "June"
    },
    {
        value: "july",
        title: "July"
    },
    {
        value: "august",
        title: "August"
    },
    {
        value: "september",
        title: "September"
    },
    {
        value: "october",
        title: "October"
    },
    {
        value: "november",
        title: "November"
    },
    {
        value: "december",
        title: "December"
    }
];
const sort = [

    {
        value: "date",
        title: "Sort By Date"
    },
    {
        value: "price_low",
        title: "Price Low to High"
    },
    {
        value: "price_high",
        title: "Price High to Low"
    },
    {
        value: "name",
        title: "Sort By Name"
    },
    {
        value: "popular",
        title: "Sort By Popularity"
    },
    {
        value: "review",
        title: "Sort By Review Score"
    }
];


const country = [

    {
        value: "",
        title: "Any Destinations"
    },
    {
        value: 277,
        title: "Tokyo"
    },
    {
        value: 278,
        title: "Seoul"
    },
    {
        value: 279,
        title: "Paris"
    },


    {
        value: 284,
        title: "London"
    },
    {
        value: 285,
        title: "Venice"
    },
    {
        value: 287,
        title: "Miami"
    },
    {
        value: 289,
        title: "Rome"
    },
    {
        value: 270,
        title: "Prague"
    },
    {
        value: 291,
        title: "California"
    },
    {
        value: 292,
        title: "Kyoto"
    },
    {
        value: 293,
        title: "Hong Kong"
    },
    {
        value: 294,
        title: "Santorini"
    }
];

// const [search,setSearch] = useState();


export function HomePage() {
    const showHide = () => {
        let ulElement = document.getElementById('inputAdvanced')
        let ulIcon = document.getElementById('inputAdvancedIcon')

        ulIcon.style.transition = "transform 0.5s";
        if (ulElement.style.display === 'none') {
            ulElement.style.display = 'flex';
            ulIcon.style.transform = 'rotate(180deg)';
        } else {
            ulElement.style.display = 'none';
            ulIcon.style.transform = 'rotate(0deg)';
        }
    }

    return (
        <>
            <div className="header-container">
                <Header/>
                <div className="video-container">
                    {/*mobile-nav-active*/}
                    <div id="indicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <video autoPlay={true} loop={true} muted={true}
                                       playsInline={true}
                                       preload="metadata" width={"100%"}>
                                    <source
                                        src="Spectacular Norway - from the air.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-format">
                    <div className="title-format" style={{color: "white"}}>
                        <h2>Where do you want to go?</h2>
                        <div className="content-tagline">Trips, experiences, and places.
                            All in one service.
                        </div>
                    </div>
                    <div className="tour-search-form">
                        <form>
                            <div className='search-container'>
                                <div className="tour-search">
                                    <div className="one_fourth ">
                                        <input name="keyword" type="text" placeholder="Destination, city"/>
                                        <i className="fa-solid fa-magnifying-glass icon-css"/>

                                        {/*<div className="autocomplete" />*/}
                                    </div>
                                    <div className="one_fourth">
                                        <select name="month" style={{appearance: "none"}}>
                                            {month.map(ct => {
                                                return <>
                                                    <option value={ct.value}>{ct.title}</option>
                                                </>
                                            })}
                                        </select>
                                        <i className="fa-regular fa-calendar-days icon-css"/>

                                        <span className="ti-calendar"/>
                                    </div>
                                    <div className="one_fourth">
                                        <select name="sort_by" style={{appearance: "none"}}>
                                            {sort.map(ct => {
                                                return <>
                                                    <option value={ct.value}>{ct.title}</option>
                                                </>
                                            })}
                                        </select>
                                        <i className="bi bi-arrow-down-up  icon-css"></i>


                                    </div>
                                    <div className="one_fourth">
                                        <input className="buttons"
                                            // style={{backgroundColor:"#FF4A52"}}
                                               type="submit" value="Search"/>
                                    </div>

                                </div>
                                <div id="inputAdvanced" className="advanced-search">
                                    <div className="tour_advance_search_wrapper">
                                        <div className="one_fourth themeborder">
                                            <select id="tourcat" name="tourcat">
                                                <option value="">All Categories</option>
                                                <option value="mountain">Mountain</option>
                                                <option value="rural">Rural</option>
                                                <option value="snow-ice">Snow &amp; Ice</option>
                                                <option value="wildlife">Wildlife</option>
                                            </select>
                                            <span className="ti-angle-down"/>
                                        </div>
                                        <div className="one_fourth themeborder">
                                            <select id="destination_id" name="destination_id">

                                                {country.map(ct => {
                                                    return <>
                                                        <option value={ct.value}>{ct.title}</option>
                                                    </>
                                                })}


                                            </select>
                                            <span className="ti-angle-down"/>
                                        </div>
                                        <div className="one_fourth ">
                                            <input name="budget" type="text"
                                                   placeholder="Max budget ex. 500"/>
                                            <i className="fa-solid fa-dollar-sign icon-css"></i>

                                        </div>
                                        <div className="one_fourth "/>
                                    </div>
                                </div>
                                <button onClick={() => showHide()} type="button" className="advanced-btn">
                                    <KeyboardArrowDownIcon id="inputAdvancedIcon"/>
                                    Advanced Search
                                </button>
                            </div>


                        </form>

                    </div>


                </div>
            </div>


            <CardContent heading={'Popular Destinations'} title={'World\'s best tourist destinations'}
                         content={popularContent}/>

            <div className="content-format">
                <div className="title-format">
                    <h2>Best Value Trips</h2>
                    <div className="content-tagline">Best offers trips from us</div>
                </div>

                <div className="content-format-body">
                    <div className="card">
                        <div className='card-img'>
                            <img
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
                                className="card-img-top" alt="..."/>
                            <div className="tour-price">$5,000</div>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">French Autumn</h4>
                            <p className="card-text">City Tours, Urban</p>
                        </div>
                        <div className="reviews">
                            <div className="star">
                                <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                                <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                                <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                                <i className="fa-regular fa-star" style={{color: "#969dab"}}/>

                                4 reviews
                            </div>
                            <div>
                                <i className="fa-regular fa-clock"/> 5 days
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='card-img'>
                            <img
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                                className="card-img-top" alt="..."/>
                            <div className="tour-price">$6,000</div>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Grand Switzerland</h4>
                            <p className="card-text">Shopping, Mountain, Snow & Ice</p>
                        </div>
                        <div className="reviews">
                            <div className="star">
                                <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                                <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                                <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                                <i className="fa-regular fa-star" style={{color: "#969dab"}}/>
                                4 reviews
                            </div>
                            <div>
                                <i className="fa-regular fa-clock"/> 6 days
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='card-img'>
                            <img
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                                className="card-img-top" alt="..."/>
                            <div className="tour-price">
                                <span style={{
                                    textDecoration: "line-through",
                                    fontSize: "17px",
                                    fontWeight: "400"
                                }}>$3,000</span>&nbsp;
                                <span>$2,500</span></div>
                            <div className="span-sale">
                                Sale
                            </div>
                        </div>

                        <div className="card-body">
                            <h4 className="card-title">Discover Japan</h4>
                            <p className="card-text">City Tours, Iconic</p>
                        </div>
                        <div className="reviews">
                            <div className="star">
                                <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                                <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                                <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                                <i className="fa-regular fa-star" style={{color: "#969dab"}}/>
                                4 reviews
                            </div>
                            <div>
                                <i className="fa-regular fa-clock"/> 5 days
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className="content-format">
                <div className="title-format">
                    <h2>Why Choose Us</h2>
                    <div className="content-tagline">Here are reasons you should plan trip with us</div>
                </div>

                <div className="content-mid">
                    <div>
                        <img
                            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png"
                            alt=""/>
                        <h4><b>Handpicked Hotels</b></h4>
                        <div>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean
                            massa
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png"
                            alt=""/>
                        <h4><b>World Class Service</b></h4>
                        <div>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean
                            massa
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png"
                            alt=""/>
                        <h4><b>Best Price Guarantee</b></h4>
                        <div>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean
                            massa
                        </div>
                    </div>
                </div>


                <div className="image-container">
                    <div className="parallax-image">
                    </div>
                </div>


                <div className="content-format">
                    <div className="title-format">
                        <h2>Articles & Tips</h2>
                        <div className="content-tagline">Explore some of the best tips from around the world</div>
                    </div>

                    <div className="card-container">
                        <div className="card">
                            <div className="card-img-top">
                                <img
                                    src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                                    alt="Card image cap"/>
                            </div>

                            <div className="card-body">
                                <div>
                                    <a href="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/">December
                                        10, 2016</a>
                                </div>
                                <h4 className="card-title"><a
                                    href="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/">Memorial
                                    Day to Someone Told Me to Travel</a></h4>
                                <p className="card-text">Meh synth Schlitz, tempor duis single-origin coffee ea next
                                    level
                                    ethnic fingerstache...
                                </p>
                                <div className="a-css">
                                    <a href="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/">Read More &gt; </a>
                                </div>

                            </div>

                        </div>
                        <div className="card">
                            <div className="card-img-top">
                                <img
                                    src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
                                    alt="Card image cap"/>

                            </div>

                            <div className="card-body">
                                <a href="https://themes.themegoods.com/grandtour/demo/7-tips-for-nomads-on-a-budget/">December
                                    10, 2016</a>
                                <h4 className="card-title">
                                    <a
                                        href="https://themes.themegoods.com/grandtour/demo/7-tips-for-nomads-on-a-budget/">7
                                        Tips For Nomads On A Budget Trips</a></h4>
                                <p className="card-text">Meh synth Schlitz, tempor duis single-origin coffee ea next
                                    level
                                    ethnic fingerstache...
                                </p>
                                <div className="a-css">
                                    <a href="https://themes.themegoods.com/grandtour/demo/7-tips-for-nomads-on-a-budget/"
                                    >Read More &gt; </a>
                                </div>

                            </div>
                        </div>
                        <div className="card">

                            <div className="card-img-top">
                                <img
                                    src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
                                    alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <a href="https://themes.themegoods.com/grandtour/demo/taking-a-travel-blog-victory-lap/">December
                                    10, 2016</a>
                                <h4 className="card-title"><a
                                    href="https://themes.themegoods.com/grandtour/demo/taking-a-travel-blog-victory-lap/">Taking
                                    A Travel Blog Victory Lap</a></h4>
                                <p className="card-text">Meh synth Schlitz, tempor duis single-origin coffee ea next
                                    level
                                    ethnic fingerstache...
                                </p>
                                <div className="a-css">
                                    <a href="https://themes.themegoods.com/grandtour/demo/taking-a-travel-blog-victory-lap/"
                                    >Read More &gt; </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <Footer/>

        </>)

}

