import React, { Component } from 'react';
import anime from 'animejs';
import { Link } from 'react-router-dom';

import { Element as ScrollElement } from 'react-scroll';
import './static/events.css'

class Events_Page extends Component {
  componentDidMount() {
    const wheel = document.getElementsByClassName('big_wheel')[0];
    //console.log(wheel);
    anime({
      targets: wheel,
      rotateZ: '-180deg',
      duration: 50000,
      loop: true,
      easing: 'linear'
    })
  }
  render() {
    return (
      <ScrollElement name="Events_Section" className="Events_Section">
        <div className="events">

          <div className="event_heading">Events</div>
          <div className="event_card_box row">
            <Link to="/events/music">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/music.svg#music'} />
                    </svg>
                    <div className="category_head">Music</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/events/photography">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/camera.svg#camera'} />
                    </svg>
                    <div className="category_head">Photography</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/events/dance">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/dance.svg#dance'} />
                    </svg>
                    <div className="category_head">Dance</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/events/painting">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/painting.svg#painting'} />
                    </svg>
                    <div className="category_head">Painting</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/events/literary">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/literature.svg#literature'} />
                    </svg>
                    <div className="category_head">Literary</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/events/informals">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/informals.svg#informals'} />
                    </svg>
                    <div className="category_head">Informals</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/events/oratory">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/oratory.svg#oratory'} />
                    </svg>
                    <div className="category_head">Oratory</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/events/audio%20visual">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/av.svg#av'} />
                    </svg>
                    <div className="category_head">Audio Visual</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/events/quizzing">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/quiz.svg#quiz'} />
                    </svg>
                    <div className="category_head">Quizzing</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/events/hiking%20and%20trekking">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/hiking.svg#hiking'} />
                    </svg>
                    <div className="category_head">HTC</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/events/lifestyle">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/fashion.svg#fashion'} />
                    </svg>
                    <div className="category_head">Lifestyle</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/events/dramatics">
              <div className="col m4 s6 pad-fix">
                <div className="event_card">
                  <div className="card_frame">
                    <svg className="card_icon">
                      <use xlinkHref={window.location.href + 'img/drama.svg#drama'} />
                    </svg>
                    <div className="category_head">Dramatics</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/*<div className="viewall_events">View all &rarr;</div>*/}
          <div className="big_wheel">
            <svg>
              <use xlinkHref={window.location.href + '/img/wheel2.svg#wheel'}></use>
            </svg>
          </div>
        </div>
      </ScrollElement >
    );
  }
}

export default Events_Page;
