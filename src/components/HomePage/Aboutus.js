import React, { Component } from 'react';
// import { Parallax } from 'react-scroll-parallax';
import anime from 'animejs';

import { Element as ScrollElement } from 'react-scroll';

import './static/Aboutus.css';

class Aboutus extends Component {

  componentDidMount() {
    anime({
      targets: document.getElementsByClassName('chakra_1')[0].getElementsByTagName('svg')[0],
      rotateZ: '180deg',
      duration: 50000,
      loop: true,
      easing: 'linear'
    });
  }

  render() {
    return (
      <ScrollElement name="About_Section" className="About_Section">
        <div className="about_us">
          <div className="chakra_1">
            <svg>
              <use xlinkHref={window.location.href + 'img/chakra.svg#chakra'} />
            </svg>
          </div>
          {/* <div className="circle_parallax  circle_1">
            <Parallax offsetYMax={100} offsetYMin={-100} slowerScrollRate={false}>
              <div className="circle"></div>
            </Parallax>
          </div>
          <div className="circle_parallax  circle_2">
            <Parallax offsetYMax={100} offsetYMin={-100} slowerScrollRate={false}>
              <div className="circle"></div>
            </Parallax>
          </div> */}
          {/* <div className="kite_parallax kite_1">
            <Parallax offsetYMax={150} offsetYMin={-120} slowerScrollRate={false}>
              <div className="kite">
                <img src={window.location.href + 'img/kite.svg'} alt='kite' />
              </div>
            </Parallax>
          </div>
          <div className="kite_parallax kite_2">
            <Parallax offsetYMax={150} offsetYMin={-120} slowerScrollRate={false}>
              <div className="kite">
                <img src={window.location.href + 'img/kite.svg'} alt='kite' />
              </div>
            </Parallax> 
          </div> */}
          <div className="about_us_data">
            <h3 className="about_header">About Us</h3>
            <section className="about_para">
              <p>Confluence, the annual cultural Festival of NIT KURUKSHETRA is a cultural extravaganza beyond words, beyond description.<br></br>

                Confluence is the coming together of free spirits, like-minded zealous youth and a celebration of culture of true artistic genius.<br />

                Its urge to deliver the maximum is what makes it one of the most awaited cultural festival.<br />
              </p>
            </section>
            <a href="https://www.townscript.com/e/confluence19-313424" className="about_aftermovie" target='_blank' rel='noreferrer noopener'>Book Star Night tickets &rarr;</a>
            <a href="https://www.youtube.com/watch?v=ZCyrjfdDy8k" className="about_aftermovie" target='_blank' rel='noreferrer noopener'>confluence'19 teaser &rarr;</a>
          </div>


          {/* <div className="pronite_data">
            <h3 className="pronite_header">Pro-Nite</h3>
            <section className="pronite_para">
              <p>
                Aditi Singh Sharma <br />
                Nalayak Band <br />
                Book Here
              </p>

              <img
                className='circle'
                src='https://i.ibb.co/VpyZhss/aditi.jpg'
                alt='this'
              />
            </section>
            <a href="https://www.youtube.com/watch?v=k02GCuw3xOE" className="about_aftermovie" target='_blank' rel='noreferrer noopener'>watch aftermovie &rarr;</a>
            <a href="https://www.youtube.com/watch?v=ZCyrjfdDy8k" className="about_aftermovie" target='_blank' rel='noreferrer noopener'>confluence'19 teaser &rarr;</a>
          </div> */}
        </div>
      </ScrollElement>
    )
  }
}

export default Aboutus;