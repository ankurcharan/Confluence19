import React, { Component } from 'react';
import anime from 'animejs';
import { Element as ScrollElement } from 'react-scroll';

import './static/Gallery.css'

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
      activeImg: 2,
      midImg: 2,
    }
    //this.imageTray = document.getElementsByClassName('image_gallery')[0];
  }

  getMyBoxes = (index) => {
    let imgGal = document.getElementsByClassName('image_gallery')[0];
    let imgBox = document.getElementsByClassName('image_box')[index];
    return { imgGal, imgBox };
  }

  handleLeftClick = () => {
    if (this.state.activeImg + 1 < this.state.imgArr.length) {
      let { imgGal, imgBox } = this.getMyBoxes(this.state.activeImg);
      this.setState({ activeImg: this.state.activeImg + 1 });
      anime({
        targets: imgGal,
        left: `-=${imgBox.getBoundingClientRect().width}px`,
        duration: 400,
        easing: "easeInOutExpo"
      })
    }
  }
  handleRightClick = () => {
    if (this.state.activeImg - 1 >= 0) {
      let { imgGal, imgBox } = this.getMyBoxes(this.state.activeImg);
      this.setState({ activeImg: this.state.activeImg - 1 });
      anime({
        targets: imgGal,
        left: `+=${imgBox.getBoundingClientRect().width}px`,
        duration: 300,
        easing: "easeInOutExpo"
      })
    }
  }

  handleWindowResize = () => {
    //console.log("heelo");
    let { imgGal, imgBox } = this.getMyBoxes(this.state.activeImg);
    anime({
      targets: imgGal,
      left: `${(-1) * (imgBox.getBoundingClientRect().width * (this.state.activeImg - this.state.midImg))}px`,
      duration: 300,
      easing: "linear",
    })

  }
  delayResize = (e) => {
    setTimeout(this.handleWindowResize, 300);
  }

  componentDidMount() {
    window.addEventListener('resize', this.delayResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.delayResize);
    console.log('hello');
  }

  render() {
    const { activeImg } = this.state;
    return (
      <ScrollElement name="Gallery_Section">
        <div className="gallery_box">

          <div className="gallery">
            <div className="TV_box">
              <div className="TV_banner">

              </div>
              <div className="TV_button_box">
                <button className="TV_button left_button" onClick={this.handleLeftClick}>

                  <img src={window.location.href + 'img/right-arrow.svg'} alt="left-arrow" className="left_arrow" />
                </button>
                <button className="TV_button right_button" onClick={this.handleRightClick}>

                  <img src={window.location.href + 'img/right-arrow.svg'} alt="right-arrow" className="right_arrow" />
                </button>
              </div>
            </div>
            <div className="image_tray">
              <div className="image_gallery">
                {
                  this.state.imgArr.map((img, index) => {
                    return (
                      <div className={`image_box ${(activeImg === index) ? "active_box" : ""}${(index === activeImg - 1) ? "left" : ""}${(index === activeImg + 1) ? "right" : ""}  `}
                        key={index}>
                        <img src={window.location.href + "img/" + img} alt={img} className="gallery_image" />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </ScrollElement>
    )
  }
}

export default Gallery;