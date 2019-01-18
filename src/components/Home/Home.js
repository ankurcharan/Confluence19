import React from 'react';
import M from 'materialize-css';

import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';

import './Home.css';
import ReactFullpage from '@fullpage/react-fullpage';

import './About.css';
import './ScrollNav.css';

import './aboutconfluence.css';
import './indexcs.css';
import $ from 'jquery';

import Contact from "../ContactUs/ContactUs";
import "../ContactUs/ContactUs.css";
import logo from './Confluence Logo.png';

import Events from '../Events/Events';

class ScrollNav extends React.Component {

    render() {

        return (

            <React.Fragment>

                <aside>
                    <div className="fixed-nav  hide-on-small-only">
                        <ul className="fixed-nav__list">
                            <li className="fixed-nav__list-item">
                                <a href="#1">
                                    <span className="fixed-nav__line"></span>
                                    <span className="fixed-nav__number">01</span>
                                    <span className="fixed-nav__name">Home</span>
                                </a>
                            </li>
                            <li className="fixed-nav__list-item ">
                                <a href="#2">
                                    <span className="fixed-nav__line"></span>
                                    <span className="fixed-nav__number">02</span>
                                    <span className="fixed-nav__name">About Confluence</span>
                                </a>
                            </li>
                            <li className="fixed-nav__list-item ">
                                <a href="#3">
                                    <span className="fixed-nav__line"></span>
                                    <span className="fixed-nav__number">03</span>
                                    <span className="fixed-nav__name">Events</span>
                                </a>
                            </li>
                            <li className="fixed-nav__list-item ">
                                <a href="#4">
                                    <span className="fixed-nav__line"></span>
                                    <span className="fixed-nav__number">04</span>
                                    <span className="fixed-nav__name">Photos</span>
                                </a>
                            </li>
                            <li className="fixed-nav__list-item ">
                                <a href="#5">
                                    <span className="fixed-nav__line"></span>
                                    <span className="fixed-nav__number">05</span>
                                    <span className="fixed-nav__name">Contact Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

            </React.Fragment>

        );
    }
}


class Confluence extends React.Component {

    render() {

        return (
            <div>
                home video background
			{/*yahan wo video wala backhround daalana hai so try that */}

                <Link to='/events/music'>music</Link>
                <br />
                <Link to='/events/literature'>literature</Link>
                <br />
                <Link to='/events/photography'>photography</Link>
                <br />
                <Link to='/gallery'>gallery</Link>
            </div>
        );
    }
}

class AboutConfluence extends React.Component {

    componentDidMount() {

        $(function () {  // $(document).ready shorthand
            $('.monster').fadeIn('slow');
        });

        $(document).ready(function () {

            /* Every time the window is scrolled ... */
            $(window).scroll(function () {

                /* Check the location of each desired element */
                $('.hideme').each(function (i) {

                    var bottom_of_object = $(this).position().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();

                    /* If the object is completely visible in the window, fade it it */
                    if (bottom_of_window > bottom_of_object) {

                        $(this).animate({ 'opacity': '1' }, 3000);

                    }

                });

            });

        });
    }

    render() {

        return (
            <div>

                <div className="about3 hideme black-text">
                    <div className="about2 center">
                        <span>C</span>
                        <span>A</span>
                        <span>R</span>
                        <span>N</span>
                        <span>I</span>
                        <span>V</span>
                        <span>A</span>
                        <span>L</span>
                        <span>&nbsp;</span>
                        <span>O</span>
                        <span>F</span>
                        <span>&nbsp;</span>
                        <span>H</span>
                        <span>E</span>
                        <span>R</span>
                        <span>I</span>
                        <span>T</span>
                        <span>A</span>
                        <span>G</span>
                        <span>E</span>
                    </div>

                    <p id='themeText' className="center">Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br />
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />
                        consequat. Duis aute irure dolor in reprehenderit in voluptate <br />
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur <br />
                        sint occaecat cupidatat non proident, sunt in culpa qui officia<br />
                        deserunt mollit anim id est laborum
                    </p>
                </div>
                <div className="container1">
                    <div className="bird-container one1">
                        <div className="bird one"></div>
                    </div>

                    <div className="bird-container two2">
                        <div className="bird two"></div>
                    </div>

                    <div className="bird-container three3">
                        <div className="bird three"></div>
                    </div>

                    <div className="bird-container four4">
                        <div className="bird four"></div>
                    </div>

                </div>

            </div>


        );
    }
}

class Photos extends React.Component {

    componentDidMount() {

        let elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {});

    }

    render() {

        return (
            <div>

                <div className="carousel">
                    <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" /></a>
                    <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" /></a>
                    <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" /></a>
                    <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" /></a>
                    <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" /></a>
                </div>




                {/* photos here */}
                {/*kuch slight fotos but redirection ka link rkhege jahan aur bhi jyada photos videos hngi */}
            </div>
        );
    }
}


class MegaEvents extends React.Component {
    render() {
        return (
            <Carousel animation={'zoom'} cellAllign={"center"} pauseOnHover={true}>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
            </Carousel>
        );
    }
}

class CarouselMaterialize extends React.Component {
    componentDidMount()
    {
        let options = {
            duration: 300,
            dist: -300,
            numVisible: 6,
            shift: 50,
            indicators: true,

        };
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, options);
        });
    }
    render() {
        return (
                <div className="carousel" class="carousel">
                    <a className="carousel-item" href="#one!"><img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img></a>
                    <a className="carousel-item" href="#two!"><img src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img></a>
                    <a className="carousel-item" href="#three!"><img src="https://images.pexels.com/photos/457702/pexels-photo-457702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img></a>
                    <a className="carousel-item" href="#four!"><img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img></a>
                    <a className="carousel-item" href="#five!"><img src="http://placehold.it/250"></img></a>
                </div>
        );
    }
}


const Fullpage = () => (
    <ReactFullpage
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>

                    {/*
            <div className="center">
                <div id="1" className="section page center grey darken-2 section scrollspy">
                    <Confluence />
                </div>
                <div id="2" className="section page center red darken-2 section scrollspy">
                    <AboutConfluence />
                </div>
                <div id="3" className="section page center darken-2 section scrollspy">


                    <h1>Events</h1>
                </div>
                <div id="4" className="section page center pink darken-2 section scrollspy megaEvents">
                    <MegaEvents />
                </div>
                <div id="5" className="section page center yellow darken-2 section scrollspy">
                    <ContactUs />
                </div>
            </div> */}
                </ReactFullpage.Wrapper>
            );
        }}
    />
);




class ContactUs extends React.Component {

    render() {
        return (
            <div className="contact">

                <div className='container'>

                    <div className='row'>

                        <div className='col s12 m12 l12'>

                            <img
                                id='contactConfluLogo'
                                className="center"
                                src="http://develop.spacemacs.org/layers/+web-services/confluence/img/confluence.png"
                                alt='confluence logo'
                            />

                        </div>

                        <div className='col s8 offset-s1 m6 offset-m1 l6 left-align responsive-text'>
                            <h1 className='white-text sitemapHeading'>Links</h1>
                            <ul className="">
                                <li className='sitemapLinks'><a href="#">FACEBOOK</a></li>
                                <li className='sitemapLinks'><a href="#">INSTAGRAM</a></li>
                                <li className='sitemapLinks'><a href="#">GOOGLE</a></li>
                                <li className='sitemapLinks'><a href="#">SNAPCHAT</a></li>
                                <li className='sitemapLinks'><a href="#">TWITTER</a></li>
                                <li className='sitemapLinks'><a href="#">FACEBOOK</a></li>
                            </ul>
                        </div>
                        <div className='col s8 offset-s1 m6 offset-m1 l6 left-align'>
                            <h1 className='white-text sitemapHeading'>Follow Us</h1>
                            <ul className="">
                                <li className='sitemapLinks'><a href="#">FACEBOOK</a></li>
                                <li className='sitemapLinks'><a href="#">INSTAGRAM</a></li>
                                <li className='sitemapLinks'><a href="#">GOOGLE</a></li>
                                <li className='sitemapLinks'><a href="#">SNAPCHAT</a></li>
                                <li className='sitemapLinks'><a href="#">TWITTER</a></li>
                                <li className='sitemapLinks'><a href="#">FACEBOOK</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

                {/* <div className="contactLogo row center">
                        <img
                            className="logo center"
                            src="http://develop.spacemacs.org/layers/+web-services/confluence/img/confluence.png"
                            alt='confluence logo'
                        />
                    </div>
                    <div className="row texta">

                    <div className="col l4 s12 m5">
                        <h1 className="text follow">LINKS</h1>
                            <ul className="text links">
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">ABOUT US</a></li>
                                <li><a href="#">THEME</a></li>
                                <li><a href="#">STATICS</a></li>
                                <li><a href="#">SOCIAL</a></li>
                                <li><a href="#">EVENTS</a></li>
                            </ul>
                        </div>
                    <div className="col l4 s12 m5">

                        <h1 className="text follow ">FOLLOW US</h1>
                        <ul className="text links ">
                            <li><a href="#">FACEBOOK</a></li>
                            <li><a href="#">INSTAGRAM</a></li>
                            <li><a href="#">GOOGLE</a></li>
                            <li><a href="#">SNAPCHAT</a></li>
                            <li><a href="#">TWITTER</a></li>
                            <li><a href="#">FACEBOOK</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="wrapper ">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-google"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                    </div>
                </div> */}
            </div>
        );
    }
}

class Home extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            lastY: 0,
            waiting: false,
            lastToLast: 0
        }

        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {

        window.addEventListener('scroll', this.handleScroll);

        let elems = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(elems, {
            scrollOffset: 0,
            throttle: 10
        });
    }

    changeDivDown = () => {
        let height = this.state.lastY;
        let divHeight = window.innerHeight;
        let idx = parseInt(height / divHeight) + 1;
        let newIdx = idx + 1;
        if(newIdx > 5)
        {
            return;
        }
        console.log(newIdx * divHeight);
    }

    changeDivUp = () => {
        let height = window.scrollY;
        let divHeight = window.innerHeight;
        let idx = parseInt(height / divHeight) + 1;

        let newIdx = idx - 1;
        if(newIdx < 1)
        {
            return;
        }
        console.log(newIdx * divHeight);
        console.log("Hi");
    }

    handleScroll = () => {
        if(this.state.waiting)
        {
            return;
        }
        this.setState({
            waiting: true,
            lastToLast: this.state.lastY,
            lastY: window.scrollY,
        });
        let direction = "up";
        if(this.state.lastY > this.state.lastToLast)
        {
            direction = "down";
        }
        if(direction === "up")
        {
            this.changeDivUp();
        }
        else
        {
            this.changeDivDown();
        }
        setTimeout(function () {
            this.setState({
                waiting: false,
                lastToLast: this.state.lastY,
                lastY: window.scrollY
            });
        }.bind(this), 500)
      };

    render() {

        const facebookLogo = 'https://timssan.com/wp-content/uploads/2018/10/kisspng-logo-social-media-facebook-brand-clip-art-facebook-logo-circle-black-5b56a93519aa02.4466565815324060691051-300x300.png';
        const twitterLogo = 'http://www.logospng.com/images/2/500-twitter-logo-latest-logo-icon-gif-2461.png';
        const instagramNetwork = 'https://cdn4.iconfinder.com/data/icons/miu/24/circle_social-instagram-outline-stroke-512.png';
        const linkedInNetwork = 'https://img.icons8.com/ios/1600/linkedin-circled.png';

        return (
            <>
                <div>
                    <img id="logoconfluence" src={logo} alt="not loading" />
                </div>
                <a href='#register' id='register' className='responsive-text transparent black-text waves-effect waves-teal btn-flat'>Register</a>





                {/* <div className="row">
                    <div className="wrapper ">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-google"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                    </div>
                </div> */}
                <div className='socialLinks'>

                    <img
                        id='facebookNetwork'
                        className='socialNetwork'
                        src={facebookLogo}
                        alt='facebook'
                    />
                    <img
                        id='instagramNetwork'
                        className='socialNetwork'
                        src={instagramNetwork}
                        alt='facebook'
                    />
                    <img
                        id='twitterNetwork'
                        className='socialNetwork'
                        src={twitterLogo}
                        alt='facebook'
                    />
                    <img
                        id='linkedInNetwork'
                        className='socialNetwork'
                        src={linkedInNetwork}
                        alt='facebook'
                    />
                </div>




                <div className='center' id="main">
                    <div id="list" className="hide-on-med-and-down">
                        <ul>
                            <li className='white-text'><a href="#1" className="navtext">CONFLUENCE</a></li>
                            <li className='white-text'><a href="#2" className="navtext">ABOUT CONFLUENCE</a></li>
                            <li className='white-text'><a href="#3" className="navtext">EVENTS</a></li>
                            <li className='white-text'><a href="#4" className="navtext">GALLERY</a></li>
                            <li className='white-text'><a href="#5" className="navtext">CONTACT US</a></li>
                        </ul>
                    </div>










                    <div>
                        <div>
                            {/* <img className="logoconfluence" src={logo} alt="not loading"></img>
                <a className="register responsive-text transparent black-text waves-effect waves-light btn pink">Register</a> */}
                        </div>
                        <div className='center llll'>

                            <div id="1" className="page center grey darken-2 active section scrollspy">
                                <Confluence />
                            </div>
                            <div id="2" className="page center about-confluence active section scrollspy">
                                <AboutConfluence />
                            </div>


                            <div id="3" className="page center darken-2 active section scrollspy">
                                {/* <EventsGenre /> */}
                                <Events />
                            </div>
                            <div id="4" className="megaEvents page center pink darken-2 active section scrollspy">
                                <CarouselMaterialize />
                            </div>
                            <div id="5" className="">
                                <ContactUs />
                            </div>
                        </div>
                    </div>

















                    {/* <Fullpage /> */}
                </div>
            </>

        );
    }
}

export default Home;
