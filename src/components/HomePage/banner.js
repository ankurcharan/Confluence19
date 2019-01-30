import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import anime from 'animejs';

import './static/banner.css';

class Banner extends Component {

  animateRays = () => {
    const rays = document.getElementsByClassName('ray_circle');
    const raysLength = rays.length;
    const duration = 6000;
    const delay = duration / raysLength;
    const timeLine = anime.timeline({
      duration: delay,
      complete: function () {
        timeLine.restart();
      }
    })
    for (let i = 0; i < raysLength; i++) {
      const radius = (1200 / raysLength) * (i * i * 0.05);
      rays[i].style.width = radius + 'px';
      rays[i].style.height = radius + 'px';
      timeLine.add({
        begin: function () {
          anime({
            targets: rays[i],
            translateX: [0, 15 + "px"],
            translateY: [0, 20 + 'px'],
            direction: "alternate",
            duration: duration * 0.1,
            easing: "easeInOutSine",
            loop: 6,
            delay: "200",
          })
        }
      })
    }
  }

  componentDidMount() {
    this.animateRays();
  }

  render() {
    return (
      <div className="banner">
        <div className="main_heading">
          <div className="confluence_text">confluence</div>
          <div className="confluence_year">2019</div>
        </div>
        <div className="ray_box">
          <div className="banner_sun"></div>
          <div className="second_sun"></div>
          {Array(50).fill(0).map((el, index) => <div key={index} className={`ray_circle ray_circle_${index}`}></div>)}
        </div>
        <div className="mountain_box">
          <div className="mountain mountain_2">
            <Parallax offsetYMax={20} offsetYMin={-5} slowerScrollRate={true}>
              <img src={window.location.origin + '/img/mountain2.svg'} alt="mountain2" />
            </Parallax>
          </div>
          <div className="mountain mountain_1">
            <Parallax offsetYMax={10} offsetYMin={-2} slowerScrollRate={true}>
              <img src={window.location.origin + '/img/mountain1.svg'} alt="mountain1" />
            </Parallax>
          </div>
          <div className="mountain mahal">
            <img src={window.location.href + '/img/mahal.svg'} alt="mahal" />
          </div>
          <div className="mountain mountain_3">
            <img src={window.location.origin + '/img/mountain3_3.svg'} alt="mountain3" />
            <div className="gallery_heading">Gallery</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
