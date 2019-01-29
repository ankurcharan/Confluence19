import React, { Component } from 'react';

import './static/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="home_footer">
        <div className="footer_confluence_heading">
          <div className="conflu_head">Confluence 2019</div>
          <div className="conflue_theme">a carnival of heritage</div>
        </div>
        <div className="footer_social">
          <div className="find_us">Find Us On</div>
          <div className="footer_social_icons">
            <div className="ficon ficon_instagram">
              <svg>
                <use xlinkHref={window.location.href + 'img/instagram.svg#instagram'} />
              </svg>
            </div>
            <div className="ficon ficon_facebook">
              <svg>
                <use xlinkHref={window.location.href + 'img/facebook.svg#facebook'} />
              </svg>
            </div>
            <div className="ficon ficon_youtube">
              <svg>
                <use xlinkHref={window.location.href + 'img/youtube.svg#youtube'} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
