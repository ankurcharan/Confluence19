import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
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
          <div className="circle_parallax  circle_1">
            <Parallax offsetYMax={100} offsetYMin={-100} slowerScrollRate={false}>
              <div className="circle"></div>
            </Parallax>
          </div>
          <div className="circle_parallax  circle_2">
            <Parallax offsetYMax={100} offsetYMin={-100} slowerScrollRate={false}>
              <div className="circle"></div>
            </Parallax>
          </div>
          <div className="kite_parallax kite_1">
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
          </div>
          <div className="about_us_data">
            <h3 className="about_header">About Us</h3>
            <section className="about_para">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut aliquid harum assumenda cum quisquam voluptas reprehenderit ipsum possimus vitae explicabo in distinctio rerum quibusdam laborum, facere voluptatibus pariatur accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia eaque deserunt excepturi omnis praesentium sapiente nostrum voluptas ut. Esse sapiente est omnis veniam cumque deleniti labore quos? Eos, suscipit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit, nisi vel rem quos error quia quam rerum nostrum soluta possimus modi, tenetur dolores quo assumenda molestiae, dolor officiis sit.lorem
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            </section>
          </div>
        </div>
      </ScrollElement>
    )
  }
}

export default Aboutus;