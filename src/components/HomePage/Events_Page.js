import React, { Component } from 'react';

import { Element as ScrollElement } from 'react-scroll';

import './static/events.css'

class Events_Page extends Component {
  render() {
    return (
      <ScrollElement name="Events_Section" className="Events_Section">
        <div className="events">

          <div className="event_heading">Events</div>
          <div className="event_card_box row">
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

            <div className="col m4 s6 pad-fix">
              <div className="event_card">
                <div className="card_frame">
                  <svg className="card_icon">
                    <use xlinkHref={window.location.href + 'img/literature.svg#literature'} />
                  </svg>
                  <div className="category_head">Literature</div>
                </div>
              </div>
            </div>

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

          </div>
          <div className="viewall_events">View all &rarr;</div>
        </div>
      </ScrollElement>
    );
  }
}

export default Events_Page;
